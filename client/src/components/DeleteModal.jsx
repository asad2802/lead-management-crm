function DeleteModal({
  isOpen,
  onClose,
  onConfirm,
}) {

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/60 flex justify-center items-center">

      <div className="bg-slate-900 p-6 rounded-xl">

        <h2 className="text-xl font-bold mb-4">
          Delete Lead?
        </h2>

        <p className="text-gray-400 mb-5">
          This action cannot be undone.
        </p>

        <div className="flex gap-3">

          <button
            onClick={onConfirm}
            className="bg-red-500 px-4 py-2 rounded"
          >
            Delete
          </button>

          <button
            onClick={onClose}
            className="bg-gray-600 px-4 py-2 rounded"
          >
            Cancel
          </button>

        </div>

      </div>

    </div>
  );
}

export default DeleteModal;