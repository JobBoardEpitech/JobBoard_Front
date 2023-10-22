<template>
  <div class="h-screen bg-[#F0F0F0] overflow-hidden m-0 p-0">
    <NavBar/>
    <section class="flex flex-wrap justify-center gap-4 pt-8">
      <div class="grid gap-4 overflow-auto max-h-[736px] pr-4">
        <AdvertisementsCards
            v-for="advertisement in advertisements"
            :key="advertisement.id"
            :name="advertisement.name"
            :active="selectedJob?.id === advertisement.id"
            :contract_type="advertisement.contract_type"
            :short_description="advertisement.short_description"
            @clickCard="onSelectJob(advertisement)"
        />
      </div>
      <DetailedAdvertisementsCard
       v-if="selectedJob"
         :key="selectedJob.id"
         :id="selectedJob.id"
        :name="selectedJob.name"
        :long_description="selectedJob.description"
        :contract_type="selectedJob.contract_type"
        :userAlreadyApplied="selectedJob.userAlreadyApplied || advertisementsApplyJobs.includes(selectedJob.id)"
        @userAppliedJob="onUserAppliedJob"
      />
    </section>
  </div>
</template>

<script setup lang="ts">
import NavBar from "@/components/client/navbar/NavBar.vue";
import AdvertisementsCards from "@/components/client/cards/AdvertisementsCards.vue";
import DetailedAdvertisementsCard from "@/components/client/cards/DetailedAdvertisementsCard.vue";
import { ref, onMounted } from "vue";
import { fetchAdvertisements, Advertisement } from "@/services/advertisements";

const advertisements = ref<Advertisement[]>([]);
const isLoading = ref(true);
const selectedJob = ref<Advertisement | null>(null);
const advertisementsApplyJobs = ref([] as number[])

onMounted(async () => {
  try {
    advertisements.value = await fetchAdvertisements();
    if (advertisements.value.length > 0){
      selectedJob.value = advertisements.value[0]
    }
  } catch (error) {
    console.error("Erreur lors de la récupération des annonces:", error);
  } finally {
    isLoading.value = false;
  }
});

const onSelectJob = (advertisement: Advertisement) => {
  selectedJob.value = advertisement;
}

const onUserAppliedJob = () => {
  const selectedJobId = selectedJob.value?.id

  if(selectedJobId) {
    advertisementsApplyJobs.value.push(selectedJobId)
  }
}

</script>
