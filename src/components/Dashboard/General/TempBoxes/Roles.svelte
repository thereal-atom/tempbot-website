<script>
    let border = "border-bottom: 4px solid rgba(165, 180, 252);"
    let box = " bg-gray-700 rounded-md p-4 h-64 w-1/2 overflow-clip overflow-x-hidden";
    let gray = "text-gray-400"

    export let rolesArray;
</script>

<div class={"ml-8"+box} style={border}>
    <p class="text-2xl font-bold pb-4 text-white flex items-center">
    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd" />
    </svg>Existing Roles</p>
    {#if rolesArray}
        {#each rolesArray as role}
            {#if role.number < 6}
                <p class="pt-2">Role <span class={gray}>{role.name}</span> expires in {role.duration} hours created by {role.creator}</p>
            {/if}
        {/each}
    {/if}
</div>