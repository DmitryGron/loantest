<template>
  <div class="p-5 rounded border-gray-300 border-[2px] bg-gray-100">
    <div class="flex flex-col justify-center items-start gap-2">
      <p class="text-gray-700 font-semibold">
        '49002010965': 0, // Debt
      </p>
      <p class="text-gray-700 font-semibold">
        '49002010976': 100, // Segment 1
      </p>
      <p class="text-gray-700 font-semibold">
        '49002010987': 300, // Segment 2
      </p>
      <p class="text-gray-700 font-semibold">
        '49002010998': 1000 // Segment 3
      </p>
    </div>
    <div class="text-gray-700 break-words">
      Constraints: Minimum input and output sum can be 2000 € Maximum input
      and output sum can be 10000 € Minimum loan period can be 12 months
      Maximum loan period can be 60 months
    </div>
  </div>
</template>

<script>
export default {
  name: 'InfoSection',
};
</script>
