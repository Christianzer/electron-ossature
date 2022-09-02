<!-- eslint-disable vue/valid-template-root -->
// eslint-disable-next-line vue/valid-template-root
<template>
    <!-- Sidebar -->
    <ul class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion toggled" id="accordionSidebar">
        <!-- Sidebar - Brand -->
        <router-link style="background-color: white;" class="sidebar-brand d-flex align-items-center justify-content-center" :to="{name : 'dashboard'}">
            <div class="sidebar-brand-icon text-center">
                <img src="@/assets/logo_obf.png" alt="logo" width="30%">
            </div>
        </router-link>

        <!-- Divider -->
        <hr class="sidebar-divider my-0">

        <!-- Nav Item - Dashboard -->
        <li class="nav-item">
            <router-link class="nav-link" :to="{name : 'dashboard'}">
                <i class="fas fa-fw fa-tachometer-alt"></i>
                <span class="text-uppercase">Tableau de Bord</span>
            </router-link>
        </li>

        
      

    </ul>
</template>

<script>
    export default {
        methods: {
           
        }
    }
</script>

<style>
</style>
