<script>
    import Guilds from "../../../components/Dashboard/Guilds.svelte"; 
    import Nav from "../../../components/Dashboard/Nav.svelte";
    import Settings from "../../../components/Dashboard/Settings.svelte";
    import { stores } from "@sapper/app";

    const { page } = stores();  
    const { guildId } = $page.params;

</script>

<div class="flex flex-row w-screen max-w-screen h-screen max-h-screen text-white">
    <Guilds />
    <Nav />
    <Settings guildId={guildId}/>
</div>