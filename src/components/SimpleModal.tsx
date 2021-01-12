import React from "react"
import { MdClose } from "react-icons/md"
import { useTheme } from "@material-ui/core/styles"

type ModalProps = {
  title: string
  icon: React.ReactNode
  iconBackgroundColor: any
  isOpen: boolean
  onClose: () => void
  content?: React.ReactNode
  footer?: React.ReactNode
}

export default function SimpleModal({
  title,
  content,
  icon,
  iconBackgroundColor,
  footer,
  isOpen,
  onClose,
}: ModalProps) {
  const theme = useTheme()

  return isOpen ? (
    <div className="fixed z-20 inset-0 overflow-y-auto">
      <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 transition-opacity" aria-hidden="true">
          <div className="absolute inset-0 bg-gray-500 opacity-75" />
        </div>
        <div
          className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-headline"
        >
          <div className="bg-white px-4 pt-5 pb-4 sm:pb-4">
            <div className="flex justify-between">
              <div className="sm:flex sm:items-start">
                <div
                  style={{ backgroundColor: iconBackgroundColor }}
                  className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full sm:mx-0 sm:h-10 sm:w-10"
                >
                  {icon}
                </div>

                <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                  <h3
                    className="text-lg leading-6 font-medium text-gray-900"
                    id="modal-headline"
                  >
                    {title}
                  </h3>
                  <div className="mt-2">
                    <p className="text-sm text-gray-600">{content}</p>
                  </div>
                </div>
              </div>
              <button
                className="border border-gray-300 rounded h-8 w-8 flex justify-center items-center"
                onClick={onClose}
              >
                <MdClose size={26} color={theme.colors.button.textPrimary} />
              </button>
            </div>
            {footer && (
              <div className="bg-purple-100 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                {footer}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div />
  )
}
