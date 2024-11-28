<script setup lang="ts">
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { toTypedSchema } from "@vee-validate/zod"
import { useForm } from "vee-validate"
import { toast } from "vue-sonner"
import { z } from "zod"
import { Input } from "../ui/input"
import { Button } from "../ui/button"
import { RouterLink, useRouter } from "vue-router"
import { login } from "@/api/auth"

const router = useRouter()

const zodSchema = z.object({
  email: z
    .string({
      required_error: "Required.",
    })
    .email({
      message: "Invalid email address.",
    }),
  password: z
    .string({
      required_error: "Required.",
    })
    .min(6, {
      message: "Password must be at least 6 characters.",
    }),
})

const loginFormSchema = toTypedSchema(zodSchema)

const form = useForm({
  validationSchema: loginFormSchema,
})

// eslint-disable-next-line @typescript-eslint/no-explicit-any
async function onSubmit(values: any) {
  try {
    await login({
      email: values.email,
      password: values.password,
    })
    toast.success("Login successful")
    router.push("/")
  } catch (error) {
    toast.error("Login failed")
  }
}
</script>

<template>
  <div>
    <Form :validation-schema="loginFormSchema" class="grid gap-4" @submit="onSubmit">
      <FormField v-slot="{ componentField }" name="email">
        <FormItem>
          <FormLabel>Email</FormLabel>
          <FormControl>
            <Input type="email" placeholder="m@example.com" v-bind="componentField" />
          </FormControl>
          <FormMessage />
        </FormItem>
      </FormField>
      <FormField v-slot="{ componentField }" name="password">
        <FormItem>
          <div class="flex items-center">
            <FormLabel>Password</FormLabel>
            <RouterLink to="#" class="ml-auto inline-block text-sm underline">
              Forgot your password?
            </RouterLink>
          </div>
          <FormControl>
            <Input type="password" v-bind="componentField" />
          </FormControl>
          <FormMessage />
        </FormItem>
      </FormField>
      <Button type="submit" class="w-full"> Login </Button>
    </Form>
  </div>
</template>
