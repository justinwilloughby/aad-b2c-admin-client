<template>
    <div>
        <h1>Users</h1>
    </div>
</template>

<script setup lang="ts">
import { useMsal } from "../composition-api/useMsal";
import { InteractionRequiredAuthError, InteractionStatus } from "@azure/msal-browser";
import { reactive, onMounted, watch } from 'vue'
import { loginRequest, tokenRequest } from "../authConfig";
import { callMsGraph } from "../utils/MsGraphApiCall";
import UserInfo from "../utils/UserInfo";

const { instance, inProgress } = useMsal();

const state = reactive({
	resolved: false,
	data: {} as UserInfo
});

async function getGraphData() {
    const response = await instance.acquireTokenSilent({
        ...tokenRequest
    }).catch(async (e) => {
        if (e instanceof InteractionRequiredAuthError) {
            await instance.acquireTokenRedirect(loginRequest);
        }
        throw e;
    });
	if (inProgress.value === InteractionStatus.None) {
		const graphData = await callMsGraph(response.accessToken);
		state.data = graphData;
		state.resolved = true;
		stopWatcher();
	}
}

onMounted(() => {
    getGraphData();
})

const stopWatcher = watch(inProgress, () => {
	if (!state.resolved) {
		getGraphData();
	}
});

</script>