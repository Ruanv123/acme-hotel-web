<script setup lang="ts">
import LoginForm from "@/components/forms/LoginForm.vue"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
</script>

<template>
  <div class="w-full lg:grid h-screen lg:grid-cols-2">
    <div class="hidden bg-muted lg:block">
      <img
        src="https://www.melhoresdestinos.com.br/wp-content/uploads/2023/05/pousada-quinta-dos-pinhais-1.jpg"
        alt="Image"
        width="1920"
        height="1080"
        class="h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
      />
    </div>

    <div class="flex items-center justify-center py-12">
      <div class="mx-auto grid w-[350px] gap-6">
        <div class="grid gap-2 text-center">
          <h1 class="text-3xl font-bold">Login</h1>
          <p class="text-balance text-muted-foreground">
            Enter your email below to login to your account
          </p>
        </div>
        <LoginForm />
        <div class="mt-4 text-center text-sm">
          Don't have an account?
          <a href="#" class="underline"> Sign up </a>
        </div>
      </div>
    </div>
  </div>
</template>
