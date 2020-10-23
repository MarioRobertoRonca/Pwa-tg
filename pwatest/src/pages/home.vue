
<template>
  <!-- Div dos itens -->
  <div class=" q-gutter-md">
    <q-list bordered padding class="constrain rounded-borders" style="min-width: 350px">
      <q-separator color="grey-7" spaced />
      <q-item-label header>Area-1</q-item-label>

      <!--Novo Agendamento-->
      <q-item clickable v-ripple to="/Camera">
        <q-item-section avatar top>
          <q-avatar icon="schedule" color="primary" text-color="white" />
        </q-item-section>

        <q-item-section>
          <q-item-label class="text-title" lines="1">Novo Agendamento</q-item-label>
          <q-item-label class="text-corpo" caption >Clique aqui para fazer um novo agendamento</q-item-label>
        </q-item-section>

        <q-item-section side>
          <q-icon name="info"/>
        </q-item-section>
      </q-item>

      <!--Meus Agendamentos-->
      <q-item clickable v-ripple>
        <q-item-section avatar top>
          <q-avatar icon="watch_later" color="orange" text-color="white" />
        </q-item-section>

        <q-item-section>
          <q-item-label class="text-title" lines="1">Meus Agendamentos</q-item-label>
          <q-item-label class="text-corpo" caption >Clique aqui para acessar seus agendamentos</q-item-label>
        </q-item-section>

        <q-item-section side>
          <q-icon name="info"  />
        </q-item-section>
      </q-item>

      <!--Pontos e histórico-->
      <q-item clickable v-ripple>
        <q-item-section avatar top>
          <q-avatar icon="control_point" color="teal" text-color="white" />
        </q-item-section>

        <q-item-section>
          <q-item-label class="text-title" lines="1"> Pontos & Histórioco</q-item-label>
          <q-item-label class="text-corpo" caption>Clique aqui para acessar Pontos & Histórioco</q-item-label>
        </q-item-section>

        <q-item-section side>
          <q-icon name="info" />
        </q-item-section>
      </q-item>

      <!--Separadores-->
      <q-separator color="grey-7" spaced />
      <q-item-label header>Area-2</q-item-label>

        <!--Promoções-->
      <q-item clickable v-ripple>
        <q-item-section avatar top>
          <q-avatar icon="star_rate" color="pink" text-color="white" />
        </q-item-section>

        <q-item-section>
          <q-item-label class="text-title" lines="1"> Promoções </q-item-label>
          <q-item-label class="text-corpo" caption>Clique aqui para acessar as Promoções</q-item-label>
        </q-item-section>

        <q-item-section side>
          <q-icon name="info" />
        </q-item-section>
      </q-item>

      <!--Notificações-->
      <q-item clickable v-ripple>
        <q-item-section avatar top>
          <q-avatar icon="notifications_active" color="orange" text-color="white" />
        </q-item-section>

        <q-item-section>
          <q-item-label class="text-title" lines="1">Notificações</q-item-label>
          <q-item-label class="text-corpo" caption>Clique aqui para acessar as Notificações</q-item-label>
        </q-item-section>

        <q-item-section side>
          <q-icon name="info" color="amber" />
        </q-item-section>
      </q-item>

      <!--Configurações-->
      <q-item clickable v-ripple>
        <q-item-section avatar top>
          <q-avatar icon="settings" color="primary" text-color="white" />
        </q-item-section>

        <q-item-section>
          <q-item-label class="text-title" lines="1">Configurações</q-item-label>
          <q-item-label class="text-corpo" caption>Acesse as configurações da sua conta</q-item-label>
        </q-item-section>

        <q-item-section side>
          <q-icon name="info" />
        </q-item-section>
      </q-item>
    </q-list>
  </div>
</template>


<script>
export default {
  name: "Home"
}
</script>

<style>
  .text-title{
    color: #29e;
    font-size: 16px;
  }
  .text-corpo{
    color: #ccc;
    font-size: 12px;
  }
  
</style>
