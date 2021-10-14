<script>
    let navItem = "p-4 h-10 rounded-md mr-8 flex items-center justify-center font-bold cursor-pointer transition-all text-lg text-gray-300";
    let navButton = "pl-8 pr-8 h-10 bg-gray-700 rounded-md mr-8 font-bold text-lg flex items-center justify-center cursor-pointer transition-all text-gray-100";
</script>
<div>
    <div class="w-full h-24 flex flex-row items-center justify-center text-white" id="nav-container">
        <div class="h-full w-3/4 flex items-center pl-12" id="nav-links" style={{backgroundColor: "#212430"}}>
            <svg width="47" height="39" viewBox="0 0 94 78" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="62" cy="46" r="28" stroke="#7A86F2" stroke-width="8"/>
                <line x1="62" y1="51" x2="62" y2="30" stroke="#7A86F2" stroke-width="8"/>
                <line x1="86.1574" y1="13.4558" x2="79.1574" y2="22.4558" stroke="#7A86F2" stroke-width="8"/>
                <line x1="52" y1="4" x2="72" y2="4" stroke="#7A86F2" stroke-width="8"/>
                <line x1="6" y1="36" x2="26" y2="36" stroke="#7A86F2" stroke-width="8"/>
                <line y1="50" x2="20" y2="50" stroke="#7A86F2" stroke-width="8"/>
                <line x1="6" y1="62" x2="26" y2="62" stroke="#7A86F2" stroke-width="8"/>
            </svg>
                
            <ul class="flex flex-row pl-8 pt-0.5">
                <a class={navItem} href="/dashboard">Dashboard</a>
                <a class={navItem} href="/premium">Premium</a>
                <a class={navItem} href="/docs">Documentation</a>
                <a class={navItem} href="dsc.gg/temp">Support Server</a>
            </ul>
        </div>
        <div class="h-full w-2/4 flex items-center justify-end" id="nav-account" style={{backgroundColor: "#212430"}}>
            <button class={navButton}>Dashboard</button>
            <button class="pl-8 pr-8 h-10 rounded-md mr-8 font-bold text-lg flex items-center justify-center cursor-pointer transition-all text-gray-100 bg-indigo-500 " id="signin">Login with discord</button>
        </div>
    </div>
</div>