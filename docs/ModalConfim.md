# MModal

```
<m-modal-confim color="pink" :open="open" @accept="open = true" @close="open = false" ok-title="Accept"icon="HomeIcon" title="Title" text="Text example ">
</m-modal-confim>
```

## props

```
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
title: {
type: String,
default: null
},
text: {
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