<script>
    let border = "border-bottom: 4px solid rgba(165, 180, 252);"
    let box = " bg-gray-700 rounded-md p-4 h-64 w-1/2 overflow-clip overflow-x-hidden";
    let gray = "text-gray-400"

    export let channelsArray;
</script>
    
<div class={"ml-8 overflow-clip overflow-hidden"+box} style={border}>
    <p class="text-2xl font-bold pb-4 text-white flex items-center">
    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M18 13V5a2 2 0 00-2-2H4a2 2 0 00-2 2v8a2 2 0 002 2h3l3 3 3-3h3a2 2 0 002-2zM5 7a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1zm1 3a1 1 0 100 2h3a1 1 0 100-2H6z" clip-rule="evenodd" />
    </svg>Existing Channels</p>
    {#if channelsArray}
        {#each channelsArray as channel}
            {#if channel.number < 6}
                <p class="pt-2">{channel.type} <span class={gray}>#{channel.name}</span> expires in {channel.expires} hours created by {channel.creator}</p>  
            {/if}  
        {/each}
    {/if}
</div>