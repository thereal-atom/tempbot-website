<script>
    let statsBox = " bg-gray-700 w-64 shadow-md h-16 rounded-sm flex items-center justify-center font-bold text-2xl"
    
    export let rolesArray;
    export let channelsArray;
    export let ticketsArray;
</script>
<div class="flex w-full flex-row justify-center items-center">
    <div class={"mr-16"+statsBox}><i class='pr-2 bx bxs-user' ></i> Roles: {#if rolesArray}{rolesArray.length}{:else}0{/if}</div>
    <div class={"mr-16 ml-16"+statsBox}><i class='pr-2 bx bxs-message-alt-detail' ></i> Channels: {#if channelsArray}{channelsArray.filter(channel => channel.type === "channel").length}{:else}0{/if}</div>
    <div class={"mr-16 ml-16"+statsBox}><i class='pr-2 bx bxs-user-voice' ></i> Voice Channels: {#if channelsArray}{channelsArray.filter(channel => channel.type !== "channel").length}{:else}0{/if}</div>
    <div class={"ml-16"+statsBox}><i class='pr-2 bx bx-support' ></i> Tickets: {#if ticketsArray}{ticketsArray.length}{:else}0{/if}</div>
</div>