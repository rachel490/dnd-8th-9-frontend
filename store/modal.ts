import { create } from "zustand";
import { devtools } from "zustand/middleware";

interface ModalState {
  logoutModalOpen: boolean;
  welcomeModalOpen: boolean;
  orderFormModalOpen: boolean;
  reviewModalOpen: boolean;
  imageModalOpen: boolean;
  toggleLogoutModal: () => void;
  toggleWelcomeModal: () => void;
  toggleOrderFormModal: () => void;
  toggleReviewModal: () => void;
  toggleImageModal: () => void;
}

const useModalStore = create<ModalState>()(
  devtools(set => ({
    logoutModalOpen: false,
    welcomeModalOpen: false,
    orderFormModalOpen: false,
    reviewModalOpen: false,
    imageModalOpen: false,
    toggleLogoutModal: () => set(state => ({ logoutModalOpen: !state.logoutModalOpen })),
    toggleWelcomeModal: () => set(state => ({ welcomeModalOpen: !state.welcomeModalOpen })),
    toggleOrderFormModal: () => set(state => ({ orderFormModalOpen: !state.orderFormModalOpen })),
    toggleReviewModal: () => set(state => ({ reviewModalOpen: !state.reviewModalOpen })),
    toggleImageModal: () => set(state => ({ imageModalOpen: !state.imageModalOpen })),
  })),
);

export default useModalStore;
