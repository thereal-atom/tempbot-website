<script>
    let border = "border-bottom: 4px solid rgba(165, 180, 252);"
    let box = " bg-gray-700 rounded-md p-4 h-64 w-1/2 overflow-clip overflow-x-hidden";
    let gray = "text-gray-400"

    export let activityArray;
</script>

<div class={"mr-8"+box} style={border}>
    <p class="text-2xl font-bold pb-4 text-white flex items-center">
    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd" />
    </svg>Recent Activity</p>
    {#if activityArray}
        {#each activityArray as a}
            {#if a.number < 6}
                <p class="pt-2"><span class="pr-2 text-indigo-300">{a.created}</span> {a.type} <span class={gray}>{a.name}</span> created by {a.creator}</p>
            {/if}
        {/each}
    {/if}
</div>