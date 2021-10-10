<!-- TODO: 
    Instead of cahcing everything at once and everytime it joins a guild it should be cached when the user visits that guilds settings, it will be cached globally
    which means even if another person access it, it will load instantly as it was cached by the other user so only one person waits. 
-->
<script>
    let statsBox = " bg-gray-700 w-64 shadow-md h-16 rounded-sm flex items-center justify-center font-bold text-2xl"
    let activityContainer = "w-11/12 mt-16 flex flex-row font-bold text-gray-300";
    let gray = "text-gray-400"
    let border = "border-bottom: 4px solid rgba(165, 180, 252);"
    let box = " bg-gray-700 rounded-md p-4 h-64 w-1/2";

    let activityArray = [{    time: "10/10/21 at 11:28am",    name: "@giveaway",    creator: "Atom#6969",    type: "Role",},{    time: "10/10/21 at 11:28am",    name: "@giveaway",    creator: "Atom#6969",    type: "Role",},{    time: "10/10/21 at 11:28am",    name: "@giveaway",    creator: "Atom#6969",    type: "Role",},{    time: "10/10/21 at 11:28am",    name: "@giveaway",    creator: "Atom#6969",    type: "Role",},{    time: "10/10/21 at 11:28am",    name: "@giveaway",    creator: "Atom#6969",    type: "Role",}];
    let channelsArray = [{    expiry: "61",    name: "#giveaway",    creator: "Atom#6969",    type: "Channel",},{    expiry: "61",    name: "#giveaway",    creator: "Atom#6969",    type: "Channel",},{    expiry: "61",    name: "#giveaway",    creator: "Atom#6969",    type: "Channel",},{    expiry: "61",    name: "#giveaway",    creator: "Atom#6969",    type: "Channel",},{    expiry: "61",    name: "#giveaway",    creator: "Atom#6969",    type: "Channel",},];
    let ticketsArray = [{    ticket: "general-209",    creator: "Atom#6969",},{    ticket: "general-209",    creator: "Atom#6969",},{    ticket: "general-209",    creator: "Atom#6969",},{    ticket: "general-209",    creator: "Atom#6969",},{    ticket: "general-209",    creator: "Atom#6969",},];
    let rolesArray = [{    role: "@giveaway",    expiry: "61",    creator: "Paul#0001"},{    role: "@giveaway",    expiry: "61",    creator: "Paul#0001"},{    role: "@giveaway",    expiry: "61",    creator: "Paul#0001"},{    role: "@giveaway",    expiry: "61",    creator: "Paul#0001"},{    role: "@giveaway",    expiry: "61",    creator: "Paul#0001"},];

    let guildInfo = {roles: 6,channels: 4,vcs: 7,tickets: 11};
</script>
<div class="h-full w-full flex flex-col items-center justify-center pt-8" id="guild-nav">
    <div class="flex w-full flex-row justify-center items-center">
        <div class={"mr-16"+statsBox}><i class='pr-2 bx bxs-user' ></i> Roles: {guildInfo.roles}</div>
        <div class={"mr-16 ml-16"+statsBox}><i class='pr-2 bx bxs-message-alt-detail' ></i> Channels: {guildInfo.channels}</div>
        <div class={"mr-16 ml-16"+statsBox}><i class='pr-2 bx bxs-user-voice' ></i> Voice Channels: {guildInfo.vcs}</div>
        <div class={"ml-16"+statsBox}><i class='pr-2 bx bx-support' ></i> Tickets: {guildInfo.tickets}</div>
    </div>
    <div class={activityContainer}>
        <div class={"mr-8"+box} style={border}>
            <p class="text-2xl font-bold pb-4 text-white flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd" />
            </svg>Recent Activity</p>
            {#each activityArray as a}
                <p class="pt-2"><span class="pr-4 text-indigo-300">{a.time}</span> {a.type} <span class={gray}>{a.name}</span> created by {a.creator}</p>
            {/each}
        </div>
        <div class={"ml-8"+box} style={border}>
            <p class="text-2xl font-bold pb-4 text-white flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M18 13V5a2 2 0 00-2-2H4a2 2 0 00-2 2v8a2 2 0 002 2h3l3 3 3-3h3a2 2 0 002-2zM5 7a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1zm1 3a1 1 0 100 2h3a1 1 0 100-2H6z" clip-rule="evenodd" />
            </svg>Existing Channels</p>
            {#each channelsArray as channel}
                <p class="pt-2">{channel.type} <span class={gray}>{channel.name}</span> expires in {channel.expiry} hours created by {channelsArray.creator}</p>    
            {/each}
        </div>
    </div>
    <div class={activityContainer}>
        <div class={"mr-8"+box} style={border}>
            <p class="text-2xl font-bold pb-4 text-white flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path d="M2 6a2 2 0 012-2h12a2 2 0 012 2v2a2 2 0 100 4v2a2 2 0 01-2 2H4a2 2 0 01-2-2v-2a2 2 0 100-4V6z" />
            </svg>Open Tickets</p>
            {#each ticketsArray as ticket}
                <p class="pt-2">Ticket <span class={gray}>{ticket.ticket}</span> opened by {ticket.creator}</p>
            {/each}
        </div>
        <div class={"ml-8"+box} style={border}>
            <p class="text-2xl font-bold pb-4 text-white flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd" />
            </svg>Existing Roles</p>
            {#each rolesArray as role}
                <p class="pt-2">Role <span class={gray}>{role.role}</span> expires in {role.expiry} hours created by {role.creator}</p>
            {/each}
        </div>
    </div>
</div>