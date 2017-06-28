var app = new Vue ({
    el: '#app',
    data: {
        title : 'Simple Vue Form with Validation',
        name: '',
        nickname: '',
        address: '',
        contactInfo: '',
        contactList:[],
        show: true
    },
    methods: {
        addContact(){
            this.contactList.push(this.contactInfo)
            this.contactInfo = ''
        },
        clear(){
            this.contactInfo = ''
        }
    },
    computed: {
        isComplete(){
            return this.name != '' && this.nickname != '' && this.address != '' && this.contactList != ''
        }
    }
})