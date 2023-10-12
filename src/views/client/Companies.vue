<template>
  <div :class="$attrs.class" @click="$emit('clickCard')">
    <div class="flex flex-col h-screen bg-gray-200 m-0 p-0">
      <NavBar/>
      <section class="flex-grow p-4 overflow-y-auto">
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-2 gap-4 items-start mx-auto max-w-screen-lg">
          <CompanyCards
              v-for="job in jobs"
              :key="job.id"
              :companyName="job.companyName"
              :short-description="job.shortDescription"
              @clickCard="onSelectJob(job)"
              class="w-card h-card mt-8"
          />
        </div>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">

import NavBar from "@/components/client/navbar/NavBar.vue";
import AdvertisementsCards from "@/components/client/cards/AdvertisementsCards.vue";
import {ref} from "vue";
import CompanyCards from "@/components/client/cards/CompanyCards.vue";

type Job = {
  id: number
  companyName: string
  shortDescription: string
}

const jobs = [
  {
    "id": 1,
    "companyName": "TechCorp",
    "jobTitle": "Software Engineer",
    "longDescription": "As a Software Engineer, you will be responsible for developing, testing, and maintaining software applications to meet the needs of the company. Your role will involve working closely with other developers, project managers, and stakeholders to ensure that all software is developed to a high standard and meets all requirements.",
    "shortDescription": "Develop, test, and maintain software applications.",
    "contractType": "Full-time",
    "hasUserApplied": false
  },
  {
    "id": 2,
    "companyName": "BioHealth",
    "jobTitle": "Biomedical Engineer",
    "longDescription": "The Biomedical Engineer will work on the design, development, and maintenance of biomedical equipment. You will be involved in ensuring that all biomedical equipment is safe and effective, and will also be responsible for providing technical support and training to other staff members.",
    "shortDescription": "Design, develop, and maintain biomedical equipment.",
    "contractType": "Part-time",
    "hasUserApplied": false
  },
  {
    "id": 3,
    "companyName": "FinAssist",
    "jobTitle": "Financial Analyst",
    "longDescription": "As a Financial Analyst, you will be responsible for analyzing financial data and trends to advise on investment decisions. This role involves generating financial reports, creating investment strategies, and assisting in budget planning and forecasting.",
    "shortDescription": "Analyze financial data and trends to advise on investment decisions.",
    "contractType": "Full-time",
    "hasUserApplied": true
  },
  {
    "id": 4,
    "companyName": "EduCreate",
    "jobTitle": "Content Creator",
    "longDescription": "The Content Creator role involves developing educational content for our online platform, ensuring it is engaging and effective for our learners. This role involves collaborating with educators to understand the curriculum, and using creative skills to create videos, interactive lessons, and other educational materials.",
    "shortDescription": "Develop engaging educational content for our online platform.",
    "contractType": "Freelance",
    "hasUserApplied": false
  },
  {
    "id": 5,
    "companyName": "GreenWorld",
    "jobTitle": "Environmental Scientist",
    "longDescription": "As an Environmental Scientist, you will be responsible for conducting research to identify, control, or eliminate pollutants and hazards to the environment or the health of the population. You'll work on a variety of projects, including analyzing environmental problems and developing prevention strategies.",
    "shortDescription": "Conduct research to address environmental problems and develop prevention strategies.",
    "contractType": "Temporary",
    "hasUserApplied": false
  },
  {
    "id": 6,
    "companyName": "FinAssist",
    "jobTitle": "Financial Analyst",
    "longDescription": "As a Financial Analyst, you will be responsible for analyzing financial data and trends to advise on investment decisions. This role involves generating financial reports, creating investment strategies, and assisting in budget planning and forecasting.",
    "shortDescription": "Analyze financial data and trends to advise on investment decisions.",
    "contractType": "Full-time",
    "hasUserApplied": true
  },
  {
    "id": 7,
    "companyName": "FinAssist",
    "jobTitle": "Financial Analyst",
    "longDescription": "As a Financial Analyst, you will be responsible for analyzing financial data and trends to advise on investment decisions. This role involves generating financial reports, creating investment strategies, and assisting in budget planning and forecasting.",
    "shortDescription": "Analyze financial data and trends to advise on investment decisions.",
    "contractType": "Full-time",
    "hasUserApplied": true
  },
  {
    "id": 8,
    "companyName": "FinAssist",
    "jobTitle": "Financial Analyst",
    "longDescription": "As a Financial Analyst, you will be responsible for analyzing financial data and trends to advise on investment decisions. This role involves generating financial reports, creating investment strategies, and assisting in budget planning and forecasting.",
    "shortDescription": "Analyze financial data and trends to advise on investment decisions.",
    "contractType": "Full-time",
    "hasUserApplied": true
  },
  {
    "id": 9,
    "companyName": "FinAssist",
    "jobTitle": "Financial Analyst",
    "longDescription": "As a Financial Analyst, you will be responsible for analyzing financial data and trends to advise on investment decisions. This role involves generating financial reports, creating investment strategies, and assisting in budget planning and forecasting.",
    "shortDescription": "Analyze financial data and trends to advise on investment decisions.",
    "contractType": "Full-time",
    "hasUserApplied": true
  },
  {
    "id": 10,
    "companyName": "FinAssist",
    "jobTitle": "Financial Analyst",
    "longDescription": "As a Financial Analyst, you will be responsible for analyzing financial data and trends to advise on investment decisions. This role involves generating financial reports, creating investment strategies, and assisting in budget planning and forecasting.",
    "shortDescription": "Analyze financial data and trends to advise on investment decisions.",
    "contractType": "Full-time",
    "hasUserApplied": true
  },
  {
    "id": 11,
    "companyName": "FinAssist",
    "jobTitle": "Financial Analyst",
    "longDescription": "As a Financial Analyst, you will be responsible for analyzing financial data and trends to advise on investment decisions. This role involves generating financial reports, creating investment strategies, and assisting in budget planning and forecasting.",
    "shortDescription": "Analyze financial data and trends to advise on investment decisions.",
    "contractType": "Full-time",
    "hasUserApplied": true
  },
  {
    "id": 12,
    "companyName": "FinAssist",
    "jobTitle": "Financial Analyst",
    "longDescription": "As a Financial Analyst, you will be responsible for analyzing financial data and trends to advise on investment decisions. This role involves generating financial reports, creating investment strategies, and assisting in budget planning and forecasting.",
    "shortDescription": "Analyze financial data and trends to advise on investment decisions.",
    "contractType": "Full-time",
    "hasUserApplied": true
  },
  {
    "id": 13,
    "companyName": "FinAssist",
    "jobTitle": "Financial Analyst",
    "longDescription": "As a Financial Analyst, you will be responsible for analyzing financial data and trends to advise on investment decisions. This role involves generating financial reports, creating investment strategies, and assisting in budget planning and forecasting.",
    "shortDescription": "Analyze financial data and trends to advise on investment decisions.",
    "contractType": "Full-time",
    "hasUserApplied": true
  },
]

/* REFS */
const selectedJob = ref(jobs[0])


/*METHODS*/
const onSelectJob = (job: Job) =>{
  selectedJob.value = job
}
</script>