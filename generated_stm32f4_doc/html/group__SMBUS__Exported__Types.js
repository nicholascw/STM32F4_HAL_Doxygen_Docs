var group__SMBUS__Exported__Types =
[
    [ "SMBUS_InitTypeDef", "structSMBUS__InitTypeDef.html", [
      [ "AddressingMode", "structSMBUS__InitTypeDef.html#aa7afcb44ef1f351763d7dc69ba0f4f8c", null ],
      [ "AnalogFilter", "structSMBUS__InitTypeDef.html#a686738e87b5427853f153bcf9344bd63", null ],
      [ "ClockSpeed", "structSMBUS__InitTypeDef.html#a2e90d47d6a9a180f8c3126c70102d562", null ],
      [ "DualAddressMode", "structSMBUS__InitTypeDef.html#aabb4e156aa4af60dfaf591419e9b1a07", null ],
      [ "GeneralCallMode", "structSMBUS__InitTypeDef.html#afc70f58c0935194064d720779fbf22b5", null ],
      [ "NoStretchMode", "structSMBUS__InitTypeDef.html#a47971fd08a9784eddaa3d83fb998030c", null ],
      [ "OwnAddress1", "structSMBUS__InitTypeDef.html#a8abec5c168e27bf11b2808c1450bdeda", null ],
      [ "OwnAddress2", "structSMBUS__InitTypeDef.html#a6300c7a7e1b7d5444226a1bd55744f53", null ],
      [ "PacketErrorCheckMode", "structSMBUS__InitTypeDef.html#a83000ad39e33f28f05cd52e714d72373", null ],
      [ "PeripheralMode", "structSMBUS__InitTypeDef.html#a3fdc14ef0737148ca9f769fc1e42846e", null ]
    ] ],
    [ "__SMBUS_HandleTypeDef", "struct____SMBUS__HandleTypeDef.html", [
      [ "Devaddress", "struct____SMBUS__HandleTypeDef.html#ad6bcf76f2ccfe535724014ef07eae04b", null ],
      [ "ErrorCode", "struct____SMBUS__HandleTypeDef.html#a123c5063e6a3b1901b2fbe5f88c53a7e", null ],
      [ "EventCount", "struct____SMBUS__HandleTypeDef.html#a5b9ab6922825ed4ab1bfeef04f18b90a", null ],
      [ "Init", "struct____SMBUS__HandleTypeDef.html#a930c8079019ff72009a76aff3cd49392", null ],
      [ "Instance", "struct____SMBUS__HandleTypeDef.html#a8bdec20782b6b99587806437094c43d2", null ],
      [ "Lock", "struct____SMBUS__HandleTypeDef.html#ad4cf225029dbefe8d3fe660c33b8bb6b", null ],
      [ "Mode", "struct____SMBUS__HandleTypeDef.html#a3a06263e063460689e9bb813896545cf", null ],
      [ "pBuffPtr", "struct____SMBUS__HandleTypeDef.html#ae5b117ad14c78eb266b018fb972e315e", null ],
      [ "PreviousState", "struct____SMBUS__HandleTypeDef.html#aa74abfd1a56073ae8c2c826db1be0628", null ],
      [ "State", "struct____SMBUS__HandleTypeDef.html#a6aa1ddf9a58477a561f0effe56e7bcdc", null ],
      [ "XferCount", "struct____SMBUS__HandleTypeDef.html#a49bf3cd0e9bcb9f41f161663f513f405", null ],
      [ "XferOptions", "struct____SMBUS__HandleTypeDef.html#a275aa3c8180a03dbe4bf55fafba3e892", null ],
      [ "XferPEC", "struct____SMBUS__HandleTypeDef.html#ad8f4bea0197311e24dabb327aac2a459", null ],
      [ "XferSize", "struct____SMBUS__HandleTypeDef.html#a51999331ab800faccdb97383b39819dd", null ]
    ] ],
    [ "SMBUS_HandleTypeDef", "group__SMBUS__Exported__Types.html#ga297c39b0e8c36a57fe7d9ec98da79123", null ],
    [ "HAL_SMBUS_ModeTypeDef", "group__SMBUS__Exported__Types.html#gaf3eb99bb66f3e388777f3d123a242f13", [
      [ "HAL_SMBUS_MODE_NONE", "group__SMBUS__Exported__Types.html#ggaf3eb99bb66f3e388777f3d123a242f13ad562e6e5129b86642e371116981bdfc5", null ],
      [ "HAL_SMBUS_MODE_MASTER", "group__SMBUS__Exported__Types.html#ggaf3eb99bb66f3e388777f3d123a242f13a228afe793c65842ae87e3bdfed9d0271", null ],
      [ "HAL_SMBUS_MODE_SLAVE", "group__SMBUS__Exported__Types.html#ggaf3eb99bb66f3e388777f3d123a242f13affb3fb914f2c8cf1adb72b9ffd5c0915", null ]
    ] ],
    [ "HAL_SMBUS_StateTypeDef", "group__SMBUS__Exported__Types.html#ga566b6739a68408dafa25ad013868e7b1", [
      [ "HAL_SMBUS_STATE_RESET", "group__SMBUS__Exported__Types.html#gga566b6739a68408dafa25ad013868e7b1a5304ea53d67f09fd73371f42f2d510fb", null ],
      [ "HAL_SMBUS_STATE_READY", "group__SMBUS__Exported__Types.html#gga566b6739a68408dafa25ad013868e7b1ab8d285d80ead80f6511d2b5661294020", null ],
      [ "HAL_SMBUS_STATE_BUSY", "group__SMBUS__Exported__Types.html#gga566b6739a68408dafa25ad013868e7b1a7d688e385ed51d3cc933b531e2481dce", null ],
      [ "HAL_SMBUS_STATE_BUSY_TX", "group__SMBUS__Exported__Types.html#gga566b6739a68408dafa25ad013868e7b1af272c00743045eb8f94b2122caa7661d", null ],
      [ "HAL_SMBUS_STATE_BUSY_RX", "group__SMBUS__Exported__Types.html#gga566b6739a68408dafa25ad013868e7b1a322c3481fc9e20f4229868909d19d8c2", null ],
      [ "HAL_SMBUS_STATE_LISTEN", "group__SMBUS__Exported__Types.html#gga566b6739a68408dafa25ad013868e7b1a42b4013979319322978d2005e11f4f12", null ],
      [ "HAL_SMBUS_STATE_BUSY_TX_LISTEN", "group__SMBUS__Exported__Types.html#gga566b6739a68408dafa25ad013868e7b1aca8b74f80bce09d25bc4f1c580982869", null ],
      [ "HAL_SMBUS_STATE_BUSY_RX_LISTEN", "group__SMBUS__Exported__Types.html#gga566b6739a68408dafa25ad013868e7b1aa450344d78c2844d15e8e5250df04e98", null ],
      [ "HAL_SMBUS_STATE_ABORT", "group__SMBUS__Exported__Types.html#gga566b6739a68408dafa25ad013868e7b1a5a32475d7caa3f541b24861730c34b96", null ],
      [ "HAL_SMBUS_STATE_TIMEOUT", "group__SMBUS__Exported__Types.html#gga566b6739a68408dafa25ad013868e7b1a0735ed6025e10dff220008904a5d2015", null ],
      [ "HAL_SMBUS_STATE_ERROR", "group__SMBUS__Exported__Types.html#gga566b6739a68408dafa25ad013868e7b1abda12af31f2e2fb30d724c29b713e339", null ]
    ] ]
];