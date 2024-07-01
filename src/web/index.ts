import { createApp } from 'vue';
import App from './App.vue';

import SConsole from '../../dist/core/console';
SConsole.install();
import thelotusroot from '../../dist/core/thelotusroot';
thelotusroot.install();

const app = createApp(App);
app.mount('#root')
