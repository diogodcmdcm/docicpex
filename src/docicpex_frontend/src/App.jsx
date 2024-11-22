import { useState } from 'react';
import { docicpex_backend } from 'declarations/docicpex_backend';

function App() {
  return (
    <main>      
      <div class="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50 py-6 sm:py-12">        
       <div class="absolute inset-0 bg-[url(/img/grid.svg)] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
       <div class="relative bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 w-full max-w-5xl mx-auto sm:px-10">
       <div class="mx-auto w-full">       
            <img src="/logo2.svg" class="h-13" alt="" />
            <div class="divide-y divide-gray-300/50">
              <div class="space-y-6 py-8 text-base leading-7 text-gray-600">
                <p>Se você recebeu cupons de ciclos para utilizar na blockchain da ICP, veja abaixo o passo a passo para resgatá-los para sua identidade ICP. 
                  Depois de resgatar os ciclos, você poderá usá-los para fazer deploys na rede principal da ICP (Mainnet).
                </p>
                <ul class="space-y-4">
                  <li class="flex flex-col items-start">       
                    <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Criar Identidade ICP</h3>                                                     
                    <p class="">
                      O primeiro passo é criar uma identidade na ICP! Caso você estiver utilizando Linux ou Mac abra o prompt de comando, 
                      caso estiver usando o Windows utilize o WSL (Windows Subsystem for Linux). Com o prompt/WSL aberto, para criar a identidade informe o comando:
                      <span class="bg-gray-100 text-gray-800 text-sm font-bold me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">dfx identity new nome-da-identidade</span>
                      (onde está escrito nome-da-identidade deverá ser substituido pelo nome da identidade que irá criar). Exemplo:                      
                    </p>                    
                    <br/>
                    <img src="/i1.jpg" class="w-full h-auto" alt="" />
                    <br/>
                    <p><b>Importante:</b> crie uma senha forte e armazene-a com segurança.</p>                    
                  </li>
                  <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
                  <li class="flex flex-col items-start">     
                    <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Conferir as identidades criadas</h3>                                   
                    <p class="">Para visualizar a lista de identidades ICP criadas utilize o comando:                        
                        <span class="bg-gray-100 text-gray-800 text-sm font-bold me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">dfx identity list</span>
                         Exemplo:
                    </p>
                    <img src="/i2.jpg" class="w-full h-auto" alt="" />                       
                  </li>
                  <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
                  <li class="flex flex-col items-start">                                          
                    <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Selecionar a identidade</h3>                                   
                    <p class="">                      
                      Antes de resgatar o cupom, selecione a identidade à qual deseja atribuir os ciclos resgatados utilizando o seguinte comando:
                      <span class="bg-gray-100 text-gray-800 text-sm font-bold me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">dfx identity use nome-da-identidade</span> 
                      (substitua nome-da-identidade pelo nome da identidade que será utilizada para armazenar os ciclos que serão resgatados). Exemplo:
                    </p>                    
                    <img src="/i3.jpg" class="w-full h-auto" alt="" />                    
                  </li>
                  <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
                  <li class="flex flex-col items-start">                    
                    <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Conferir identidade selecionada</h3>                                   
                    <p class="">
                      Para verificar a identidade ICP atualmente configurada para uso, você pode utilizar o seguinte comando:
                      <span class="bg-gray-100 text-gray-800 text-sm font-bold me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">dfx identity whoami</span>
                      Exemplo:
                    </p>                  
                    <img src="/i4.jpg" class="w-full h-auto" alt="" />                    
                  </li>
                  <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
                  <li class="flex flex-col items-start">                    
                      <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Conferir comunicação com rede principal da ICP</h3>                                   
                      <p class="">
                        Antes de executar o comando para resgatar os ciclos, verifique se o seu computador está conseguindo se comunicar com a rede principal da ICP. Para isso, utilize o seguinte comando:
                        <span class="bg-gray-100 text-gray-800 text-sm font-bold me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">dfx ping ic</span>
                        Será apresentado um resultado semelhante ao exemplo abaixo:
                      </p>                    
                      <img src="/i5.jpg" class="w-full h-auto" alt="" />                    
                  </li>
                  <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
                  <li class="flex flex-col items-start">                    
                      <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Resgatar ciclos utilizando o cupom</h3>
                      <p class="">
                        Para resgatar os ciclos recebidos utilize o seguinte comando:                         
                        <span class="bg-gray-100 text-gray-800 text-sm font-bold me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">dfx cycles redeem-faucet-coupon codigo-do-cupom --network ic</span>
                        (substitua codigo-do-cupom pelo código do cupom recebido). Será apresentado um resultado semelhante com o exemplo apresentado abaixo:
                      </p>                    
                      <img src="/i6.jpg" class="w-full h-auto" alt="" />                    
                  </li>
                  <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
                  <li class="flex flex-col items-start">
                    <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Visualizar quantidade de ciclos resgatados</h3>                                        
                    <p class="">
                      Para visualizar a quantidade de ciclos recebidos utilize o seguinte comando: 
                      <span class="bg-gray-100 text-gray-800 text-sm font-bold me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">dfx cycles --network ic balance</span>
                      Geralmente os cupons são de 10 trilhões de ciclos! Exemplo:
                    </p>                  
                    <img src="/i7.jpg" class="w-full h-auto" alt="" />                    
                  </li>
                  <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
                  <li class="flex flex-col items-start">                    
                    <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Publicar DAPP com os ciclos resgatados</h3>
                    <p class="">
                      Os ciclos poderão ser utilizados para publicar um DAPP na rede principal da ICP. Para isso, primeiro navegue até o diretório que contém os códigos fonte do DAPP, utilizando o comando:
                      <span class="bg-gray-100 text-gray-800 text-sm font-bold me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">cd nome-do-diretorio</span> 
                      (substitua nome-do-diretorio pelo nome do diretório do projeto]). Exemplo:
                    </p>                    
                    <img src="/i9.jpg" class="w-full h-auto" alt="" />                                      
                    <p class="">
                      Em seguida para publicar o DAPP utilize o seguinte comando: 
                      <span class="bg-gray-100 text-gray-800 text-sm font-bold me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">dfx deploy --network ic</span>
                    </p> Exemplo:              
                    <img src="/i11.jpg" class="w-full h-auto" alt="" />                    
                      <p class="">
                      Após concluir o processo de deploy, você receberá as URLs dos canisters. Elas poderão ser utilizadas para acessadar o DAPP na rede principal da ICP através de um navegador. Abaixo, estão alguns exemplos das URLs que serão geradas: 
                      </p>                    
                    <img src="/i12.jpg" class="w-full h-auto" alt="" />
                    <p class="">
                      <b>Observação:</b> Para visualizar quantos de ciclos sobraram após o deploy você poderá executar novamente o comando: 
                      <span class="bg-gray-100 text-gray-800 text-sm font-bold me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">dfx cycles --network ic balance</span>
                    </p>
                  </li>                  
                  <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
                  <li class="flex flex-col items-start">
                      <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Adicionar ciclos ao canister.</h3>
                      <p class="">
                        Para inserir mais ciclos no Canister você primeiramente terá que obter o ID do Canister que deseja enviar os ciclos, para isso entre no diretorio do projeto, exemplo:                         
                      </p>
                      <img src="/i9.jpg" class="w-full h-auto" alt="" />                                          
                      <p class="">
                        Utilize o seguinte código para obter o ID do Canister:
                        <span class="bg-gray-100 text-gray-800 text-sm font-bold me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">dfx canister id nome-canister --network ic</span>
                        (substitua nome-canister pelo nome do Canister do projeto que deseja visualizar o ID). Exemplo:
                      </p>                      
                      <img src="/i8.jpg" class="w-full h-auto" alt="" />                                          
                      <p class="">
                        Para enviar mais ciclos para o Canister utilize o seguinte código:                         
                        <span class="bg-gray-100 text-gray-800 text-sm font-bold me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">dfx cycles top-up id-do-canister quantidade-ciclos --network ic</span> 
                        (substitua id-do-canister pelo ID obtido anteriormente e quantidade-ciclos pela quantidade que deseja enviar). Exemplo: 
                      </p>                      
                      <img src="/i10.jpg" class="w-full h-auto" alt="" />                    
                  </li>
                  <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
                  <li class="flex flex-col items-start">
                      <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Conferir quantidade de ciclos disponiveis no canister.</h3>
                      <p class="">
                        Para visualizar a quantidade de ciclos disponiveis em um Canister, dentro do diretorio do projeto utilize o seguinte comando:
                        <span class="bg-gray-100 text-gray-800 text-sm font-bold me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">dfx canister status nome-do-canister --network ic</span> 
                        ( substitua nome-do-canister pelo nome do Canister que deseja conferir a quantidade de ciclos disponiveis). Exemplo:
                      </p> 
                      <img src="/i13.jpg" class="w-full h-auto" alt="" />                                                                
                  </li>
                </ul>                
              </div>
              <div class="pt-8 text-base font-semibold leading-7">
                <p class="text-gray-900">Para mais informações acesse os links abaixo:</p>
                <p>
                  <a href="https://internetcomputer.org/docs/current/developer-docs/getting-started/cycles/cycles-faucet/" class="text-sky-500 hover:text-sky-600">Como obter ciclos para iniciar o desenvolvimento em ICP (documentação oficial) &rarr;</a>
                </p>                
                <p>
                  <a href="https://dashboard.internetcomputer.org/" class="text-sky-500 hover:text-sky-600">Dashboard da rede ICP (util para visualizar os Canister publicados) &rarr;</a>
                </p>              
                <p>
                  <a href="https://internetcomputer.org/docs/current/developer-docs/getting-started/overview-of-icp" class="text-sky-500 hover:text-sky-600">Documentação completa do ICP &rarr;</a>                  
                </p>
                <p>
                  <a href="https://www.icphubbr.com/" class="text-sky-500 hover:text-sky-600">ICP Hub Brasil &rarr;</a>                  
                </p>
              </div>              
            </div>
          </div>
        </div>
      </div>

    </main>
  );
}

export default App;
