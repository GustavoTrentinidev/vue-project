<template>
  <v-container fluid class="pa-8" >
    <h1 class="h1">Meu perfil</h1>
    <v-img height="200" width="200" style="border-radius: 100%; background-position:center;background-image: url('https://s3.amazonaws.com/bm3assets/assets/default-user-img-c61778d399f8abbcb5d2ac637122913c3a86a8c4c4c96a8ff81b0bfcf79b2c88.jpg')" :src="imagem"></v-img>
    <v-form>
      <v-container>
        <v-text-field label="Nome" v-model="nome"></v-text-field>
        <v-text-field label="Sobrenome" v-model="sobrenome"></v-text-field>
        <v-text-field label="Endereço de imagem" v-model="imagem"></v-text-field>
        <v-btn color="green accent-3" @click="salvarPerfil">Salvar</v-btn>
        
      </v-container>
    </v-form>
  </v-container>
</template>

<script>
import * as fb from '@/plugins/firebase'
export default {
  data(){
    return{
      nome: "",
      sobrenome: "",
      uid: "",
      temPerfil: false,
      imagem: "",
    }
  },
  async mounted(){
    this.uid = fb.auth.currentUser.uid
    const userProfile = await fb.profileCollection.where("uid", "==", this.uid).get()
    if(userProfile.docs.length > 0){
      this.temPerfil = true
      const perfil = userProfile.docs[0]
      this.profileId = perfil.id
      this.nome = perfil.data().nome
      this.sobrenome = perfil.data().sobrenome
      this.imagem = perfil.data().imagem
    }
  },
  methods: {
    async salvarPerfil(){
      if(this.temPerfil){
        await fb.profileCollection.doc(this.profileId).update({
          nome: this.nome,
          sobrenome: this.sobrenome,
          imagem: this.imagem
        })
      } else{
        await fb.profileCollection.add({
          uid: this.uid,
          nome: this.nome,
          sobrenome: this.sobrenome,
          imagem: this.imagem,
        })
      }
    },
  },
}
</script>

<style>

</style>