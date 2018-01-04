Vue.component('model', {

   template: `
        <div id="myModal" class="modal fade" role="dialog">
             <div class="modal-dialog">
                  <!-- Modal content-->
                  <div class="modal-content">
                       <div class="modal-header">
                            <button type="button" class="close" data-dismiss="modal">&times;</button>
                            <h4 class="modal-title">Modal Header</h4>
                       </div>
                       <div class="modal-body">
                            <p>Some text in the modal.</p>
                       </div>
                       <div class="modal-footer">
                            <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                       </div>
                  </div>
             </div>
        </div>
   `,
});

Vue.component('message', {

   props: ['title', 'body'],

   data() {
       return {
         isVisible: true
       };
   },

   template: `
        <div class="card" v-show="isVisible">
            <div class="card-header">
                {{title}}
                <button type="button" class="float-right btn btn-danger" @click="isVisible = false">
                    <i class="fa fa-times"></i>
                </button>
            </div>
            <div class="card-block">            
                <p class="card-text">
                    {{body}}
                </p>
            </div>
        </div>
   `,

    // methods: {
    //
    //     hideModel() {
    //         this.isVisible = false;
    //     }
    // }


});

Vue.component('task-list', {

   template: `
        <div>
             <ul class="list-group">
                <li class="list-group-item" v-for="task in tasks">{{task.task}}</li>
             </ul>
        </div>  
   `,

    data() {
       return {

           tasks: [
               {task: 'Go to Office', complete: true},
               {task: 'Go to Shop', complete:false},
               {task: 'Go to work', complete: true}
           ]
       };
    }
});

Vue.component('task', {

    template: '<li>Foobar</li>'
});

new Vue({

   el:'#component-root',

   data: {

       showModal: false
   }
});