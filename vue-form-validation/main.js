var app = new Vue ({
    el: '#app',
    data: {
        title : 'Simple Vue Form with Validation',
        name: '',
        nickname: '',
        address: '',
        contactInfo: '',
        contactList:[],
        show: true, 
        persons: [{
            name: 'Ed Lui',
            nickname: 'Ed',
            address: 'Sample',
            contactList: '["09051983533"]'
        }]
    },
    methods: {
        addContact(){
            this.contactList.push(this.contactInfo)
            this.contactInfo = ''
        },
        clear(){
            this.contactInfo = ''
        },
        remove(contact){
            this.contactList.splice(this.contactList.indexOf(contact), 1)
        },
        register(){
            this.persons.push({
                name: this.name,
                nickname: this.nickname,
                address: this.address,
                contactList: this.contactList
            })
            this.name = ''
            this.nickname = ''
            this.address = ''
            this.contactList = []
        }
    },
    computed: {
        isComplete(){
            return this.name != '' && this.nickname != '' && this.address != '' && this.contactList != ''
        }
    }
})