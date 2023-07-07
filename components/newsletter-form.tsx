"use client";
import * as z from "zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  useFormField,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

const formSchema = z.object({
  email: z
    .string()
    .email({
      message: "E-mail inválido.",
    })
    .min(10, {
      message: "Mínimo de 10 caracters.",
    })
    .max(50, {
      message: "Máximo de 50 caracteres.",
    }),
});

export default function NewsletterForm() {
  //Definir o formulário
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  //Defina seu Handler
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex gap-2">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              {/* <FormLabel className="hidden">Email</FormLabel> */}
              <FormControl>
                <Input placeholder="E-mail" {...field} />
              </FormControl>
              {/* <FormDescription className="hidden">
                This is your E-mail
              </FormDescription> */}
              <FormMessage />
            </FormItem>
          )}
        />
        <Button variant={"outline"} type="submit">
          Cadastrar
        </Button>
      </form>
    </Form>
  );
}
