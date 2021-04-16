# MDropDown

##example 
```
        <m-drop-down noIcon class="pl-32">
          <template #body class="flex justify-between">
            <img class="h-7 w-7 rounded-full"
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixqx=eG1lRgrgwG&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt="" />
            <span class="hidden ml-3 text-white text-sm font-medium lg:block"><span class="sr-only">Open user menu for
              </span>Emilia Birch</span>
          </template>
          <m-drop-down-item>Account Settings</m-drop-down-item>
          <m-drop-down-item>Preferences</m-drop-down-item>
          <m-drop-down-item>Logout</m-drop-down-item>
        </m-drop-down>
        <m-drop-down class="pl-32">
          <template #body>
            Options
          </template>
          <m-drop-down-item>Account Settings</m-drop-down-item>
          <m-drop-down-item>Preferences</m-drop-down-item>
          <m-drop-down-item>Logout</m-drop-down-item>
        </m-drop-down>
        <m-drop-down class="pl-32">
          <template #body>
            Icons
          </template>
          <m-drop-down-item icon="CogIcon">Account Settings</m-drop-down-item>
          <m-drop-down-item icon="HomeIcon" >Preferences</m-drop-down-item>
          <m-drop-down-item icon="ArchiveIcon" >Logout</m-drop-down-item>
        </m-drop-down>
        <m-drop-down class="pl-32" small>
          <template #body>
            Options
          </template>
          <m-drop-down-item>Account Settings</m-drop-down-item>
          <m-drop-down-item>Preferences</m-drop-down-item>
          <m-drop-down-item>Logout</m-drop-down-item>
        </m-drop-down>
```

##props

```
            noIcon: {
                type: Boolean,
                default: false
            },
            color: {
                type: String,
                default: 'indigo'
            },
            small: {
                type: Boolean,
                default: false
            }
```