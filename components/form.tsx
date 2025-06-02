"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Textarea } from "@/components/ui/textarea"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"

const formSchema = z.object({
  model: z.enum([
    "gpt-4.1",
    "gpt-4.1-mini",
    "gpt-4.1-nano",
    "gpt-4.5-preview",
    "gpt-4o",
    "gpt-4o-mini",
    "o1",
    "o1-mini",
    "o1-pro",
    "o3",
    "o3-mini",
    "o4-mini",
    "claude-sonnet-4",
    "claude-opus-4",
    "google/gemini-2.5-flash-preview",
    "google/gemini-2.5-flash-preview:thinking",
    "google/gemini-2.5-pro-exp-03-25:free",
    "google/gemini-2.0-flash-lite-001",
    "google/gemini-2.0-flash-001",
    "google/gemini-2.0-pro-exp-02-05:free",
    "google/gemini-2.0-flash-thinking-exp:free",
    "google/gemini-2.0-flash-thinking-exp-1219:free",
    "google/gemini-2.0-flash-exp:free",
    "google/gemini-flash-1.5-8b",
    "google/gemini-flash-1.5-8b-exp",
    "google/gemini-flash-1.5",
    "google/gemini-pro-1.5",
    "google/gemini-pro",
    "deepseek-chat",
    "deepseek-reasoner",
    "meta-llama/llama-4-maverick",
    "meta-llama/llama-4-scout",
    "meta-llama/llama-3.3-70b-instruct",
    "meta-llama/llama-3.2-3b-instruct",
    "meta-llama/llama-3.2-1b-instruct",
    "meta-llama/llama-3.1-405b",
    "meta-llama/llama-3.1-8b-instruct",
    "meta-llama/llama-3.1-405b-instruct",
    "meta-llama/llama-3.1-70b-instruct",
    "meta-llama/llama-3-8b-instruct",
    "meta-llama/llama-3-70b-instruct"
  ]),
  message: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
})

export function AIForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      model: "gpt-4.1-mini",
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
      <FormField
          control={form.control}
          name="model"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Model</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a model" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="gpt-4.1">gpt-4.1</SelectItem>
                  <SelectItem value="gpt-4.1-mini">gpt-4.1-mini</SelectItem>
                  <SelectItem value="gpt-4.1-nano">gpt-4.1-nano</SelectItem>
                  <SelectItem value="gpt-4.5-preview">gpt-4.5-preview</SelectItem>
                  <SelectItem value="gpt-4o">gpt-4o</SelectItem>
                  <SelectItem value="gpt-4o-mini">gpt-4o-mini</SelectItem>
                  <SelectItem value="o1">o1</SelectItem>
                  <SelectItem value="o1-mini">o1-mini</SelectItem>
                  <SelectItem value="o1-pro">o1-pro</SelectItem>
                  <SelectItem value="o3">o3</SelectItem>
                  <SelectItem value="o3-mini">o3-mini</SelectItem>
                  <SelectItem value="o4-mini">o4-mini</SelectItem>
                  <SelectItem value="claude-sonnet-4">claude-sonnet-4</SelectItem>
                  <SelectItem value="claude-opus-4">claude-opus-4</SelectItem>
                  <SelectItem value="google/gemini-2.5-flash-preview">google/gemini-2.5-flash-preview</SelectItem>
                  <SelectItem value="google/gemini-2.5-flash-preview:thinking">google/gemini-2.5-flash-preview:thinking</SelectItem>
                  <SelectItem value="google/gemini-2.5-pro-exp-03-25:free">google/gemini-2.5-pro-exp-03-25:free</SelectItem>
                  <SelectItem value="google/gemini-2.0-flash-lite-001">google/gemini-2.0-flash-lite-001</SelectItem>
                  <SelectItem value="google/gemini-2.0-flash-001">google/gemini-2.0-flash-001</SelectItem>
                  <SelectItem value="google/gemini-2.0-pro-exp-02-05:free">google/gemini-2.0-pro-exp-02-05:free</SelectItem>
                  <SelectItem value="google/gemini-2.0-flash-thinking-exp:free">google/gemini-2.0-flash-thinking-exp:free</SelectItem>
                  <SelectItem value="google/gemini-2.0-flash-thinking-exp-1219:free">google/gemini-2.0-flash-thinking-exp-1219:free</SelectItem>
                  <SelectItem value="google/gemini-2.0-flash-exp:free">google/gemini-2.0-flash-exp:free</SelectItem>
                  <SelectItem value="google/gemini-flash-1.5-8b">google/gemini-flash-1.5-8b</SelectItem>
                  <SelectItem value="google/gemini-flash-1.5-8b-exp">google/gemini-flash-1.5-8b-exp</SelectItem>
                  <SelectItem value="google/gemini-flash-1.5">google/gemini-flash-1.5</SelectItem>
                  <SelectItem value="google/gemini-pro-1.5">google/gemini-pro-1.5</SelectItem>
                  <SelectItem value="google/gemini-pro">google/gemini-pro</SelectItem>
                  <SelectItem value="deepseek-chat">deepseek-chat</SelectItem>
                  <SelectItem value="deepseek-reasoner">deepseek-reasoner</SelectItem>
                  <SelectItem value="meta-llama/llama-4-maverick">meta-llama/llama-4-maverick</SelectItem>
                  <SelectItem value="meta-llama/llama-4-scout">meta-llama/llama-4-scout</SelectItem>
                  <SelectItem value="meta-llama/llama-3.3-70b-instruct">meta-llama/llama-3.3-70b-instruct</SelectItem>
                  <SelectItem value="meta-llama/llama-3.2-3b-instruct">meta-llama/llama-3.2-3b-instruct</SelectItem>
                  <SelectItem value="meta-llama/llama-3.2-1b-instruct">meta-llama/llama-3.2-1b-instruct</SelectItem>
                  <SelectItem value="meta-llama/llama-3.1-405b">meta-llama/llama-3.1-405b</SelectItem>
                  <SelectItem value="meta-llama/llama-3.1-8b-instruct">meta-llama/llama-3.1-8b-instruct</SelectItem>
                  <SelectItem value="meta-llama/llama-3.1-405b-instruct">meta-llama/llama-3.1-405b-instruct</SelectItem>
                  <SelectItem value="meta-llama/llama-3.1-70b-instruct">meta-llama/llama-3.1-70b-instruct</SelectItem>
                  <SelectItem value="meta-llama/llama-3-8b-instruct">meta-llama/llama-3-8b-instruct</SelectItem>
                  <SelectItem value="meta-llama/llama-3-70b-instruct">meta-llama/llama-3-70b-instruct</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Message</FormLabel>
              <FormControl>
              <Textarea placeholder="Tanyakan apa saja" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  )
}