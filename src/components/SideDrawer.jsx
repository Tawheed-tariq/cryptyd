import {
    Drawer,
    DrawerBody,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
  } from '@chakra-ui/react'
import Sidenav from './sidenav'
export default function SideDrawer({onClose, isOpen}){
    return (
      <>
        <Drawer
          isOpen={isOpen}
          placement='left'
          onClose={onClose}
        //   finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
  
            <DrawerBody>
                <Sidenav/>
            </DrawerBody>
  
          </DrawerContent>
        </Drawer>
      </>
    )
}