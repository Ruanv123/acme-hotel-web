<script setup lang="ts">
import { cn } from "@/lib/utils"
import { RouterLink, RouterView, useRoute } from "vue-router"
import { Button } from "../ui/button"
import PageTitle from "../PageTitle.vue"
import { Separator } from "../ui/separator"

interface Item {
  title: string
  href: string
}

const $route = useRoute()

const sidebarNavItems: Item[] = [
  {
    title: "Profile",
    href: "#",
  },
  {
    title: "Account",
    href: "#",
  },
  {
    title: "Appearance",
    href: "#",
  },
  {
    title: "Notifications",
    href: "#",
  },
  {
    title: "Display",
    href: "#",
  },
]
</script>

<template>
  <PageTitle page-title="Configurações" />
  <Separator class="my-3" />
  <div class="flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0 px-5">
    <aside class="-mx-4 lg:w-1/5">
      <nav class="flex space-x-2 lg:flex-col lg:space-x-0 lg:space-y-1">
        <Button
          v-for="item in sidebarNavItems"
          :key="item.title"
          as="a"
          :href="item.href"
          variant="ghost"
          :class="
            cn(
              'w-full text-left justify-start',
              $route.path === `${item.href}.html` && 'bg-muted hover:bg-muted',
            )
          "
        >
          {{ item.title }}
        </Button>
      </nav>
    </aside>
    <div class="flex-1 lg:max-w-2xl">
      <div class="space-y-6">
        <RouterView />
      </div>
    </div>
  </div>
</template>
