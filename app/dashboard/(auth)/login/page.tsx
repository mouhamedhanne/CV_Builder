"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/app/components/ui/button";

const LoginFormSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

type LoginformValues = z.infer<typeof LoginFormSchema>;

const LoginPage = () => {
  const form = useForm<LoginformValues>({
    resolver: zodResolver(LoginFormSchema),
  });

  return (
    <form className="h-screen w-screen flex items-center justify-center">
      <div>
        <h1 className="text-3xl font-bold mb-3">Login</h1>

        <div>
          <Button>Login</Button>
          {/**
          *  <button
            className="px-4 py-2 rounded-[10px] font-normal 
                 text-[16px] bg-bg_button text-white
               hover:bg-hover_bg_button transition duration-300
                 ease-in-out transform"
          >
            Login
          </button>
          */}
        </div>
      </div>
    </form>
  );
};

export default LoginPage;
