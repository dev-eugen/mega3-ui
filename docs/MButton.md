# MButton

##example 
```
        <m-button size="sm" color="green">button</m-button>
        <m-button size="md" color="blue">button</m-button> 
        <m-button size="md" rounded color="blue">button</m-button> 
        <m-button size="lg" color="red">button</m-button>
        <m-button size="sm" icon="MailIcon" color="indigo">button</m-button>
        <m-button size="md" icon="MailIcon" color="indigo">button</m-button>
        <m-button size="lg" icon="MailIcon" color="indigo">button</m-button>
```

##props

```
            color: {
                type: String,
                default: "primary",
            },
            icon: {
                type: String,
                default: null
            },
            rounded: {
                type: Boolean,
                default: false
            },
            noHead: {
                type: Boolean,
                default: false
            },
            size: {
                type: String,
                default: 'md'
            }
```