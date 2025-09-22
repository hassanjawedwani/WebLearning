"use client";
import { todoSchema } from "@/lib/schemas";
import { TodoForm } from "@/lib/types";
import { supabase } from "@/supabase-client";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";

interface Task {
  id: number,
  title: string,
  description: string,
  created_at: string
}
const Todo = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [disc, setDisc] = useState<string>("")
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TodoForm>({ resolver: zodResolver(todoSchema) });

  const fetchTask = async () => {
    const { data, error } = await supabase.from("todos").select("*").order("title ", {ascending: false});
    if (error) {
      toast.error("error in fetcing data");
      console.log(error);
    }
    if (data) {
      setTasks(data);
    }
  };

  useEffect(() => {
    fetchTask();
  }, []);

  const onSubmit: SubmitHandler<TodoForm> = async (data) => {
    console.log("data", data);
    const { data: insertedTask, error } = await supabase.from("todos").insert(data).select().single();
    if (error) {
      toast.error(error.message);
      return;
    }
    toast.success("Task added successfully!");
    if (insertedTask) {
      setTasks((prevTasks) => [...prevTasks, insertedTask as Task]);
    }
  };

  const deleteHandler = async(id: number) => {
    const { data, error } = await supabase.from("todos").delete().eq("id", id);

    if (error) {
      toast.error(error.message);
      return;
    }
    console.log(data);
    toast.success("Task deleted successfully");
    setTasks(prevTasks => prevTasks.filter(task => task.id !== id))
  }

  const updateHandler = async(id: number) => {
    const { data: updateData, error: updateError }: { data: any; error: any } = await supabase.from("todos").update({description: disc}).eq("id", id);

    if (updateError) {
      toast.error(updateError.message);
      return;
    }
    console.log(updateData);
    toast.success("Task updated successfully");
    setTasks(prevTasks => prevTasks.map(task => task.id === id ? { ...task, description: disc } : task))
  }

  return (
    <div className="w-full h-screen center-flex">
      <div className="w-96">
        <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
          <h1 className="text-xl font-semibold text-center">
            Task Manager CRUD
          </h1>
          <div className="space-y-3">
            <input
              {...register("title")}
              id="title"
              name="title"
              type="text"
              placeholder="Task Title"
              className="w-full bg-white/10 p-2 border border-white"
            />
            <p className="text-red-600">{errors?.title?.message}</p>
            <textarea
              {...register("description")}
              id="description"
              name="description"
              placeholder="Task Description"
              className="w-full bg-white/10 p-2 border border-white h-16"
            ></textarea>
            <p className="text-red-600">{errors?.description?.message}</p>
          </div>
          <button
            type="submit"
            className="bg-black/20 text-white p-3 mx-auto block rounded"
          >
            Add Task
          </button>
        </form>
        {tasks?.map((task) => (
          <div key={task.id}>
            <h2>title: {task.title}</h2>
            <p>Description: {task.description}</p>
            <button onClick={() => deleteHandler(task.id)}>Delete</button>
            <button onClick={() => updateHandler(task.id)}>Update</button>

          </div>
        ))}

        <textarea onChange={e => setDisc(e.target.value)}></textarea>
      </div>
    </div>
  );
};

export default Todo;
