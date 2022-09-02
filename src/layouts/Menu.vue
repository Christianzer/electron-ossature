<template>
    <!-- Page Wrapper -->
    <div id="wrapper">

        <!-- Sidebar -->
        <Sidebar />
        <!-- End of Sidebar -->

        <!-- Content Wrapper -->
        <div id="content-wrapper" class="d-flex flex-column">

            <!-- Main Content -->
            <div id="content">


                <!-- Begin Page Content -->
                <div class="container-fluid">
                    <router-view></router-view>
                </div>
                <!-- /.container-fluid -->

            </div>
            <!-- End of Main Content -->

            <!-- Footer -->
            <Footer />
            <!-- End of Footer -->

        </div>
        <!-- End of Content Wrapper -->



    </div>
    <!-- End of Page Wrapper -->


</template>

<script>
import Sidebar from './sidebar.vue'
import Header from './header.vue'
import Footer from './footer.vue'
export default {
    name: 'App',
    components: {
        Sidebar,
        Header,
        Footer
    },
    methods: {
        loggout () {
            localStorage.removeItem('LoggedUser')
            this.$router.push({ name: 'Login' })
        }
    }
}
</script>

<style>
</style>
