<template>
    <div class="hidden md:block">
        <div class="ml-10 flex items-baseline space-x-4">
            <a v-on:click="loginPopup" class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Log In</a>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useMsal } from '../composition-api/useMsal';
import { loginRequest } from "../authConfig";

const {instance} = useMsal();

const loginPopup = () => {
    instance.loginPopup(loginRequest);
}
</script>