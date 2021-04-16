# MModal

<m-modal></m-modal>

## props

```
      textSize:{
          type: String,
          default: 'md'
      },
      color:{
          type: String
      },
      open: {
          type: Boolean,
          require: false 
      },
      icon: {
          type: String,
          default: null
      },
      okTitle:{
          type: String,
          default: 'Accept'
      },
      cancelTitle:{
          type: String,
          default: 'Cancel'
      }
```

## emits

accept # no data
cancel # no data
close # no data
