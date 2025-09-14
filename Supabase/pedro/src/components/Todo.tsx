"use client";
import { todoSchema } from "@/lib/schemas";
import { TodoForm } from "@/lib/types";
import { supabase } from "@/supabase-client";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";

const Todo = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TodoForm>({ resolver: zodResolver(todoSchema) });

  const onSubmit: SubmitHandler<TodoForm> = async (data) => {
    console.log("data", data);
    const { error } = await supabase.from("todos").insert(data).single();

    if (error) {
      toast.error(error.message);
      return;
    }

    toast.success("Task added successfully!");
  };

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
      </div>
    </div>
  );
};

export default Todo;
