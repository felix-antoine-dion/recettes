import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'

import { 
    provideFASTDesignSystem, 
    fastCard, 
    fastButton,
    fastSwitch
  } from '@microsoft/fast-components';
  
provideFASTDesignSystem()
    .register(
        fastCard(),
        fastButton(),
        fastSwitch()
    );

createApp(App).use(router).mount('#app')
