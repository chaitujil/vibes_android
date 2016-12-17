(function () {
    'use strict';

    angular.module('vibes')
        .controller('DialoguesCtrl', DialoguesCtrl);

    DialoguesCtrl.$inject = ['ChannelsService', 'ModalService', 'AudioService', 'ChannelMetadataService'];

    function DialoguesCtrl(ChannelsService, ModalService, AudioService, ChannelMetadataService) {
        var vm = this;
        vm.channels = null;
        vm.setChannel = setChannel;
        vm.openModal = openModal;
        vm.closeModal = closeModal;
        vm.play = play;
        vm.pause = pause;

        init();
        function init() {
            vm.channels = ChannelsService.allDialogueChannels();
        }

        function setChannel(channelId) {
            ModalService.setDialoguesChannel(channelId);
        }

        function openModal() {
            ModalService.openModal();
        }

        function closeModal() {
            ModalService.closeModal();
        }

        function play() {
            AudioService.play();
            ChannelMetadataService.refreshChannelMetadata();
        }

        function pause() {
            AudioService.pause();
        }
    }
})();
