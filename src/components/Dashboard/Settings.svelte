<!-- TODO: 
    Instead of cahcing everything at once and everytime it joins a guild it should be cached when the user visits that guilds settings, it will be cached globally
    which means even if another person access it, it will load instantly as it was cached by the other user so only one person waits. 
-->
<script>
    import { onMount, tick } from "svelte";
    import TempStatBox from "./General/TempStatBox.svelte";
    import Activity from "./General/TempBoxes/Activity.svelte"
    import Channels from "./General/TempBoxes/Channels.svelte"
    import Roles from "./General/TempBoxes/Roles.svelte"
    import Tickets from "./General/TempBoxes/Tickets.svelte"
    
    let activityContainer = "w-11/12 mt-16 flex flex-row font-bold text-gray-300";
    let gray = "text-gray-400"
    let border = "border-bottom: 4px solid rgba(165, 180, 252);"
    let box = " bg-gray-700 rounded-md p-4 h-64 w-1/2 overflow-clip overflow-x-hidden";

    let temp;
    let activityArray;
    let channelsArray;
    let ticketsArray;
    let rolesArray;

    onMount(async () => {
        const res = await fetch("http://localhost:50451/dashboard/889223726468579338/temp");
        temp = await res.json()
        console.log(temp[0].type.toLowerCase() === "channel" && temp[0].exists);
        activityArray =  temp.filter(action => action.type !== "ticket").sort((a, b) => b.number - a.number);
        channelsArray = temp.filter(action => action.type === "channel").sort((a, b) => b.number - a.number);
        ticketsArray = temp.filter(action => action.type === "ticket").sort((a, b) => b.number - a.number);
        rolesArray = temp.filter(action => action.type === "role").sort((a, b) => b.number - a.number);
        console.log(channelsArray);
    })
</script>
<div class="h-full w-full flex flex-col items-center justify-center pt-8" id="guild-nav">
    <TempStatBox channelsArray={channelsArray} rolesArray={rolesArray} ticketsArray={ticketsArray}/>
    <div class={activityContainer}>
        <Activity activityArray={activityArray}/>
        <Channels channelsArray={channelsArray}/>
    </div>
    <div class={activityContainer}>
        <Tickets ticketsArray={ticketsArray}/>
        <Roles rolesArray={rolesArray}/>
    </div>
</div>