<script>
    let border = "border-bottom: 4px solid rgba(165, 180, 252);"
    let box = " bg-gray-700 rounded-md p-4 h-64 w-1/2 overflow-clip overflow-x-hidden";
    let gray = "text-gray-400"

    export let ticketsArray;
</script>

<div class={"mr-8"+box} style={border}>
    <p class="text-2xl font-bold pb-4 text-white flex items-center">
    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
        <path d="M2 6a2 2 0 012-2h12a2 2 0 012 2v2a2 2 0 100 4v2a2 2 0 01-2 2H4a2 2 0 01-2-2v-2a2 2 0 100-4V6z" />
    </svg>Open Tickets</p>
    {#if ticketsArray}
        {#each ticketsArray as ticket}
            {#if ticket.number < 6}
                <p class="pt-2">Ticket <span class={gray}>{ticket.name}</span> opened by {ticket.creator}</p>
            {/if}
        {/each}
    {/if}
</div>