import { defineStore , storeToRefs } from "pinia";
import { useLocalStorage } from "@vueuse/core";
import { ref , computed} from "vue";

export const AuthUser = defineStore('Auth', () => {
    const userAuth = ref(false)
    const uname = ref(null)
    const usertok = ref(null)

    const getName = computed(() => uname)
    const getUserTok = computed(() => usertok)
    const getUserAuth = computed(() => userAuth.value)
    function changeName(name) {
      uname.value = name
    }
   function changeUserTok(userToken) {
        usertok.value = userToken
   }
    function toggleAuth() {
        userAuth.value = !userAuth.value
      }
    function LogOut() {
        changeName(null)
        changeUserTok(null)
        toggleAuth()
    }
      
    return { uname, usertok ,  userAuth , getName, getUserTok, getUserAuth, changeName,toggleAuth, changeUserTok, LogOut }
     
  }, {
    persist: true,
  })