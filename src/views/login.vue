<template>
    <div class="login-form">
        <form v-on:submit.prevent="login_user">
            <div class="avatar"> <img src="@/assets/logo_obf.png" alt="logo" width="150%" style="margin: -12px -18px 30px;"></div>
            <h4 class="modal-title">OBF-STOCK</h4>
            <div class="form-group">
                <input type="text" v-model="form.email" class="form-control" placeholder="Utilisateur">
            </div>
            <div class="form-group">
                <input type="password" v-model="form.password" class="form-control" placeholder="Mot de passe">
            </div>
            <input type="submit" class="btn btn-primary btn-block btn-lg text-uppercase" value="Connexion">
        </form>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                form: {
                    email: '',
                    password: ''
                }
            }
        },
        methods: {
            async login_user () {
                if (this.form.email === 'obf' && this.form.password === 'admin'){
                    localStorage.setItem('LoggedUser',true)
                    this.$router.push({ name: 'dashboard' })
                }

            }
        }
    }
</script>

<style>
    body {
        color: #999;
        font-family: 'Varela Round', sans-serif;
    }

    .form-control {
        box-shadow: none;
        border-color: #ddd;
    }

    .form-control:focus {
        border-color: #4aba70;
    }

    .login-form {
        width: 350px;
        margin: 0 auto;
        padding: 30px 0;
    }

    .login-form form {
        color: #434343;
        border-radius: 1px;
        margin-bottom: 15px;
        padding: 30px;
    }

    .login-form h4 {
        text-align: center;
        font-size: 22px;
        margin-bottom: 20px;
    }

    .login-form .avatar {
        color: #fff;
        margin: 0 auto 30px;
        text-align: center;
        width: 100px;
        height: 100px;
        border-radius: 50%;
        z-index: 9;
        padding: 15px;
    }

    .login-form .avatar i {
        font-size: 62px;
    }

    .login-form .form-group {
        margin-bottom: 20px;
    }

    .login-form .form-control,
    .login-form .btn {
        min-height: 40px;
        border-radius: 2px;
        transition: all 0.5s;
    }

    .login-form .close {
        position: absolute;
        top: 15px;
        right: 15px;
    }

    .login-form .btn {
        background: #007bff;
        border: none;
        line-height: normal;
    }

    .login-form .btn:hover,
    .login-form .btn:focus {
        background: #007bff;
    }

    .login-form .checkbox-inline {
        float: left;
    }

    .login-form input[type="checkbox"] {
        margin-top: 2px;
    }

    .login-form .forgot-link {
        float: right;
    }

    .login-form .small {
        font-size: 13px;
    }

    .login-form a {
        color: #4aba70;
    }
</style>
