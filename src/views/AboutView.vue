<script setup>
import { ref } from 'vue';
import { useToast } from 'primevue/usetoast';
import { useI18n } from 'vue-i18n';

const cvValue = ref('Español');
const { locale } = useI18n();

if (locale.value == 'en') {
  cvValue.value = 'English'
}

const toast = useToast();


const cvOptions = ref(['Español', 'English']);

const cvDownload = (title, greeting) => {
  
  let url = cvValue.value == 'English' ? 'https://drive.google.com/uc?export=download&id=1m1s0o3PppvbaQPs1MP_I_KW2_DteIonX' : 'https://drive.google.com/uc?export=download&id=16TwAOyM6ok0juN5A7xPzMX-5dj5kKeFi'

  const link = document.createElement('a');
  link.href = url;
  link.download = 'CV-Matias-Martel';
  link.click();
  toast.add({severity:'success', summary: title, detail: greeting, group: 'br', life: 3000})
};


</script>

<template>
  <main class="flex flex-column justify-content-around">
    <Toast position="bottom-right" group="br"></Toast>
    <ScrollPanel class="xl:w-8 lg:w-10 w-full h-full">
        <div class="flex flex-column justify-content-between gap-4">
        <Panel class="bg-white-alpha-10 panel">
          <template #header>
            <div class="flex flex-row align-items-center justify-content-between gap-2 w-full">
              <div class="flex flew-row align-items-center xl:w-2">
                  <i class="pi pi-hashtag m-2 text-xl text-primary"/>
                  <span class="font-bold sm:text-3xl text-xl hover:text-primary">{{ $t('navBar[1]')}}</span>
              </div>
              <div class="flex sm:flex-row flex-column align-items-center gap-2 ">
                <SelectButton v-model="cvValue" :options="cvOptions" aria-labelledby="basic" :allowEmpty=false />
                <Button :label="$t('resumeeButton') + ' =>'" icon="pi pi-user" @click="cvDownload($t('resumee'), $t('resumeeGreeting'))" rounded text class="w-auto md:text-base sm:text-sm text-xs" outlined></Button>
              </div>
            </div>
          </template>
          <template #footer>
          </template>
          <div class="flex flex-column justify-content-center">
          <div class="flex sm:flex-row flex-column justify-content-between">
              <div class="sm:w-7 sm:mt-0 mt-2 flex align-items-center">
                <Fieldset >
                  <template #legend>
                    <div class="flex align-items-center pl-2">
                        <Avatar image="https://i.imgur.com/S8mPEMX.png" shape="circle" /> 
                        <span class="font-bold">DMaledicte</span>
                    </div>
                  </template>
                  <p class="h-auto border-round transition-ease-out transition-duration-100 hover:bg-primary hover:text-gray-900">{{ $t('homeView.parrafo1') }}</p>
                  <p class="h-auto border-round transition-ease-out transition-duration-100 hover:bg-primary-reverse hover:text-gray-900">
                    {{ $t('homeView.parrafo2') }}
                  </p>
                  <p class="h-auto border-round transition-ease-out transition-duration-100 hover:bg-primary-reverse hover:text-gray-900">
                    {{ $t('homeView.parrafo3') }}
                  </p>
                </Fieldset>
              </div>
              <div class="flex flex-row justify-content-center sm:w-5 ">
                <Image alt="Image">
                  <template #image>
                      <img src="/src/assets/profile-pic.png" alt="image" class="h-30rem"/>
                  </template>
              </Image>
              </div>
          </div>
          <div class="flex sm:flex-row flex-column justify-content-between">
            <Fieldset legend="Certificaciones" class="w-full ">
              <div class="flex md:flex-row flex-column justify-content-around align-items-center md:gap-0 gap-2">
                <Chip class="py-0 pl-0 pr-3">
                  <span class="bg-primary border-circle w-2rem h-2rem flex align-items-center justify-content-center">E</span>
                  <a href="https://drive.google.com/file/d/1YE4yaRTXBOxHDmuf8N8gGAhkazjZe0_H/view?usp=drive_link" target="_blank" class="text-primary no-underline">
                    <span class="ml-2 font-medium">C1 English Certification</span>
                  </a>
                </Chip>
                <Chip class="py-0 pl-0 pr-3">
                  <span class="bg-primary border-circle w-2rem h-2rem flex align-items-center justify-content-center">C</span>
                  <a href="https://drive.google.com/file/d/1ESKR5uua_67qhPD4PZyP29Gx_URMUD8R/view?usp=drive_link" target="_blank" class="text-primary no-underline">
                    <span class="ml-2 font-medium">Programa Codo a Codo 4.0</span>
                  </a>
                </Chip>
                <Chip class="py-0 pl-0 pr-3">
                  <span class="bg-primary border-circle w-2rem h-2rem flex align-items-center justify-content-center">P</span>
                  <a href="https://www.linkedin.com/in/mjmartel/details/certifications/" target="_blank" class="text-primary no-underline">
                    <span class="ml-2 font-medium">Platzi Academy</span>
                  </a>
                </Chip>
              </div>
            </Fieldset>
          </div>
          </div>
        </Panel>
        </div>
      </ScrollPanel>
  </main>
</template>

<style scoped>
:deep(.p-panel .p-panel-content) {
  padding: 0 1.125rem 0.50rem 1.125rem;
}

.panel {
  height: auto;
}

.stickyPanel{
  height: 2px;
}
</style>
