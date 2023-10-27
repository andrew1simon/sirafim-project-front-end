import { defineStore , storeToRefs } from "pinia";
import { useLocalStorage } from "@vueuse/core";
import { ref , computed} from "vue";

export const AuthUser = defineStore('Auth', () => {
    const userAuth = ref(false)
    const uname = ref(null)
    const usertok = ref(null)
    const AMode = ref(null)
    const getTesting = computed(() => testing)
    const getName = computed(() => uname)
    const getUserTok = computed(() => usertok)
    const getUserAuth = computed(() => userAuth.value)
    const getAMode = computed(() => AMode.value)
    function changeName(name) {
      uname.value = name
    }
    
   function changeUserTok(userToken) {
        usertok.value = userToken
   }
   function changeTesting(testingValue) {
    testing.value = testingValue
   }
    function toggleAuth() {
        userAuth.value = !userAuth.value
      }
    function Mode(userMode) {
      console.log("changing mode to" , userMode)
      AMode.value = userMode
    }
    function LogOut() {
        changeName(null)
        changeUserTok(null)
        Mode(null)
        toggleAuth()
    }
      
    return { uname, usertok ,  userAuth , AMode ,  getName, getUserTok, getUserAuth, getAMode , getTesting, changeName,toggleAuth, changeUserTok, LogOut , Mode }
     
  }, {
    persist: true,
  })