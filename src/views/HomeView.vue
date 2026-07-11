<script setup>
import { ref } from 'vue';

const projects = ref([
  {
    imgUrl: "https://i.imgur.com/RH88vJE.png",
    title: "SSR Quasar Datatable",
    codeLink: "https://github.com/D-Maledicte/table-built-in-quasar",
    demoLink: "https://d-maledicte.github.io/table-built-in-quasar/",
  },
  {
    imgUrl: "https://i.imgur.com/9YlRv8x.png",
    title: "FUT Calculator 2024 Edition",
    codeLink: "https://github.com/D-Maledicte/fut-calculator-2024",
    demoLink: "https://d-maledicte.github.io/fut-calculator-2024/#/",
  }
]);

const skills = ref([
  {
    label: 'Back-End',
    elements: ['PHP', 'Node.js', 'Express.js', 'Postgres', 'MongoDB', 'Deluge'],
    icon: 'dns'
  },
  {
    label: 'Front-End',
    elements: ['JavaScript', 'Vue.js', 'Pinia', 'VueRouter', 'vueI18n', 'Quasar Framework', 'PrimeVue', 'Tailwind', 'PHP'],
    icon: 'desktop_windows'
  },
  {
    label: 'Soft Skills',
    elements: [0,1,2,3,4,5],
    icon: 'face'
  }
]);
</script>

<template>
  <main class="flex flex-column justify-content-around">
    <ScrollPanel class="xl:w-8 lg:w-10 w-full h-full">
      <div class="flex flex-column justify-content-between gap-6">
        <Panel class="bg-white-alpha-10 panel stickypanel" toggleable>
          <template #header>
            <div class="w-full">
              <div class="flex flex-row align-items-center justify-content-between gap-2 w-full">
                <div class="flex flew-row align-items-center xl:w-2">
                  <i class="pi pi-hashtag m-2 text-xl text-primary"/>
                  <span class="font-bold sm:text-3xl text-xl">{{$t('homeView.aboutMe')}}</span>
                </div>
                <router-link to="about">
                  <Button :label="$t('homeView.learnMore') + ' =>'" icon="pi pi-user" rounded text class="w-full"></Button>
                </router-link>
              </div>
            </div>
          </template>
          <div class="flex sm:flex-row flex-column justify-content-between">
            <div class="sm:w-7 sm:mt-0 mt-2 flex align-items-center">
              <Fieldset>
                <template #legend>
                  <div class="flex align-items-center pl-2">
                    <Avatar image="https://i.imgur.com/S8mPEMX.png" shape="circle"/>
                    <span class="font-bold">DMaledicte</span>
                  </div>
                </template>
                <p class="h-auto">{{ $t('homeView.parrafo1') }}</p>
                <p class="h-auto">{{ $t('homeView.parrafo2') }}</p>
                <p class="h-auto">{{ $t('homeView.parrafo3') }}</p>
              </Fieldset>
            </div>
            <div class="flex flex-row justify-content-center sm:w-5">
              <Image alt="Image">
                <template #image>
                  <img src="/src/assets/profile-pic.png" alt="image" class="h-30rem"/>
                </template>
              </Image>
            </div>
          </div>
        </Panel>

        <Panel class="bg-white-alpha-10 panel stickypanel" toggleable collapsed>
          <template #header>
            <div class="flex flex-row align-items-center justify-content-between gap-2 w-full">
              <div class="flex flew-row align-items-center xl:w-2">
                <i class="pi pi-hashtag m-2 text-xl text-primary"/>
                <span class="font-bold sm:text-3xl text-xl">{{ $t('homeView.projects') }}</span>
              </div>
              <router-link to="projects">
                <Button :label="$t('homeView.learnMore') + ' =>'" icon="pi pi-user" rounded text class="w-full"></Button>
              </router-link>
            </div>
          </template>
          <div class="md:p-5 md:mt-0 mt-2 flex md:flex-row flex-column sm:align-items-center justify-content-center gap-4">
            <template v-for="(project, index) in projects" :key="project.title">
              <Card class="w-25rem projectPanel overflow-hidden">
                <template #header>
                  <Image alt="Image">
                    <template #image>
                      <img :src="project.imgUrl" alt="image" class="h-9rem w-full"/>
                    </template>
                  </Image>
                </template>
                <template #title>{{ project.title }}</template>
                <template #subtitle>
                  <p>{{ $t(`homeView.mainprojects[${index}]`) }}</p>
                </template>
                <template #footer>
                  <div class="flex gap-3 mt-1">
                    <a :href="project.codeLink" target="_blank">
                      <Button icon="pi pi-code" label="Codigo" severity="secondary" outlined class="w-full"/>
                    </a>
                    <a :href="project.demoLink" target="_blank">
                      <Button icon="pi pi-external-link" label="Demo" severity="secondary" outlined class="w-full"/>
                    </a>
                  </div>
                </template>
              </Card>
            </template>
          </div>
        </Panel>

        <Panel class="bg-white-alpha-10 panel stickypanel" toggleable collapsed>
          <template #header>
            <div class="flex flex-row align-items-center justify-content-between gap-2 w-full">
              <div class="flex flew-row align-items-center xl:w-2">
                <i class="pi pi-hashtag m-2 text-xl text-primary"/>
                <span class="font-bold sm:text-3xl text-xl">{{ $t('homeView.skills') }}</span>
              </div>
              <router-link to="contact">
                <Button :label="$t('homeView.learnMore') + ' =>'" icon="pi pi-user" rounded text class="w-full"></Button>
              </router-link>
            </div>
          </template>
          <div class="md:p-4 flex md:flex-row md:mt-0 mt-2 flex-column sm:align-items-center md:gap-4">
            <template v-for="(item, index) in skills" :key="item.label">
              <Panel class="md:w-4 sm:w-9 md:h-25rem">
                <template #header>
                  <div class="flex align-items-center justify-content-center w-full gap-2">
                    <span class="material-icons text-primary">{{ item.icon }}</span>
                    <span class="font-bold">{{ item.label }}</span>
                  </div>
                  <Divider class="m-0"/>
                </template>
                <div class="flex flex-column align-items-center justify-content-center mt-2">
                  <template v-for="(element, elementIndex) in item.elements" :key="element">
                    <p class="m-2">
                      {{ item.label == 'Soft Skills' ? $t(`homeView.softSkills[${element}]`) : element }}
                    </p>
                    <template v-if="elementIndex + 1 !== item.elements.length">
                      <Divider class="m-0"/>
                    </template>
                  </template>
                </div>
              </Panel>
              <template v-if="index + 1 !== skills.length">
                <Divider layout="vertical"/>
              </template>
            </template>
          </div>
        </Panel>
      </div>
    </ScrollPanel>
  </main>
</template>

<style scoped>
.panel {
  height: auto;
}

.projectPanel {
  min-height: 400px;
}
</style>
