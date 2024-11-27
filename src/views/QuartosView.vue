<script setup lang="ts">
import PageTitle from '@/components/PageTitle.vue'
import PaginationBlock from '@/components/PaginationBlock.vue'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
</script>

<template>
  <PageTitle page-title="Quartos" />

  <div class="flex flex-col items-center gap-3">
    <Table class="border">
      <TableHeader>
        <TableRow>
          <TableHead>#</TableHead>
          <TableHead>Numero Quarto</TableHead>
          <TableHead>Tipo</TableHead>
          <TableHead>Capacidade</TableHead>
          <TableHead>Tarifa Diaria</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Acoes</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>#</TableCell>
        </TableRow>
      </TableBody>
    </Table>
    <PaginationBlock />
  </div>
</template>
