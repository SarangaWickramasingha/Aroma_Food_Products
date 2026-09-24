import { useState, useEffect } from "react";
import Pdetails from "../data/Pdetails";

const OrderModal = ({ isOpen, onClose, defaultProductIndex = 0 }) => {
  const [selectedProductIndex, setSelectedProductIndex] = useState(defaultProductIndex);
  const [selectedPack, setSelectedPack] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [customerName, setCustomerName] = useState("");
  const [phone, setPhone] = useState("");
  const [notes, setNotes] = useState("");
  const [orderType, setOrderType] = useState("retail"); // retail or wholesale

  useEffect(() => {
    setSelectedProductIndex(defaultProductIndex);
  }, [defaultProductIndex]);

  const currentProduct = Pdetails[selectedProductIndex] || Pdetails[0];

  useEffect(() => {
    if (currentProduct?.packSizes?.length > 0) {
      setSelectedPack(currentProduct.packSizes[0]);
    }
  }, [selectedProductIndex]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleWhatsAppOrder = (e) => {
    e.preventDefault();
    const phoneNum = "94771234567"; // Aroma official business WhatsApp
    const message = `Hello Aroma Food Products! 👋
I would like to make an inquiry / order:
- *Type*: ${orderType === "wholesale" ? "Wholesale / Distribution" : "Retail Order"}
- *Product*: ${currentProduct.label}
- *Size / Variant*: ${selectedPack}
- *Quantity*: ${quantity}
- *Name*: ${customerName || "Customer"}
- *Phone*: ${phone || "Not provided"}
${notes ? `- *Notes*: ${notes}` : ""}

Please confirm availability and pricing. Thank you!`;

    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/${phoneNum}?text=${encoded}`, "_blank");
    onClose();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="order-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-4 backdrop-blur-md animate-fade-slide-in"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative max-h-[92vh] w-full max-w-xl overflow-y-auto rounded-3xl bg-[#FFFDF8] p-6 shadow-2xl sm:p-9 text-[#1A1008] border border-white/20"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close order modal"
          className="absolute top-5 right-5 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-black/5 text-lg font-bold text-[#1A1008] transition hover:bg-[#C44A3A] hover:text-white"
        >
          ✕
        </button>

        {/* Modal Header */}
        <div>
          <span className="rounded-full bg-[#C44A3A]/10 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-[#C44A3A]">
            Quick Order & Inquiry
          </span>
          <h2 id="order-modal-title" className="mt-2 font-serif text-2xl sm:text-3xl font-bold">
            Order Aroma Pure Ceylon Products
          </h2>
          <p className="mt-1 text-sm text-black/60">
            Select your favorite artisan roast or snack for fresh direct delivery or wholesale inquiries.
          </p>
        </div>

        <form onSubmit={handleWhatsAppOrder} className="mt-6 flex flex-col gap-5">
          {/* Order Type Pills */}
          <div className="flex rounded-2xl bg-black/5 p-1">
            <button
              type="button"
              onClick={() => setOrderType("retail")}
              className={`flex-1 rounded-xl py-2 text-xs font-bold transition ${
                orderType === "retail" ? "bg-white text-[#1A1008] shadow-sm" : "text-black/60 hover:text-black"
              }`}
            >
              Retail / Personal Order
            </button>
            <button
              type="button"
              onClick={() => setOrderType("wholesale")}
              className={`flex-1 rounded-xl py-2 text-xs font-bold transition ${
                orderType === "wholesale" ? "bg-white text-[#1A1008] shadow-sm" : "text-black/60 hover:text-black"
              }`}
            >
              Wholesale / Cafe Inquiries
            </button>
          </div>

          {/* Product Selection */}
          <div>
            <label className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-black/70">
              Select Product
            </label>
            <div className="grid grid-cols-2 gap-3">
              {Pdetails.map((p, idx) => (
                <button
                  key={p.id}
                  type="button"
                  onClick={() => setSelectedProductIndex(idx)}
                  className={`flex items-center gap-3 rounded-2xl border p-3 text-left transition ${
                    selectedProductIndex === idx
                      ? "border-[#C44A3A] bg-[#C44A3A]/5 shadow-sm ring-1 ring-[#C44A3A]"
                      : "border-black/10 bg-white hover:border-black/25"
                  }`}
                >
                  <img
                    src={p.productImage}
                    alt={p.label}
                    className="h-10 w-10 object-contain"
                  />
                  <div>
                    <p className="text-xs font-bold text-[#1A1008]">{p.label}</p>
                    <p className="text-[10px] text-black/50">{p.price}</p>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Pack Size Selection */}
          {currentProduct.packSizes && (
            <div>
              <label className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-black/70">
                Package Size / Variant
              </label>
              <div className="flex flex-wrap gap-2">
                {currentProduct.packSizes.map((size) => (
                  <button
                    key={size}
                    type="button"
                    onClick={() => setSelectedPack(size)}
                    className={`rounded-xl px-3.5 py-1.5 text-xs font-semibold transition ${
                      selectedPack === size
                        ? "bg-[#2C1A0E] text-white shadow-sm"
                        : "bg-black/5 text-black/80 hover:bg-black/10"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Quantity and Name */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label className="mb-1 block text-xs font-bold uppercase tracking-wider text-black/70">
                Quantity
              </label>
              <div className="flex items-center rounded-xl border border-black/15 bg-white p-1">
                <button
                  type="button"
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="h-8 w-8 rounded-lg bg-black/5 text-base font-bold transition hover:bg-black/10"
                >
                  -
                </button>
                <span className="flex-1 text-center font-bold text-sm">{quantity}</span>
                <button
                  type="button"
                  onClick={() => setQuantity((q) => q + 1)}
                  className="h-8 w-8 rounded-lg bg-black/5 text-base font-bold transition hover:bg-black/10"
                >
                  +
                </button>
              </div>
            </div>

            <div>
              <label className="mb-1 block text-xs font-bold uppercase tracking-wider text-black/70">
                Your Name
              </label>
              <input
                type="text"
                value={customerName}
                onChange={(e) => setCustomerName(e.target.value)}
                placeholder="e.g. Kasun Fernando"
                className="w-full rounded-xl border border-black/15 bg-white px-3 py-2 text-sm outline-none transition focus:border-[#C44A3A] focus:ring-1 focus:ring-[#C44A3A]"
              />
            </div>
          </div>

          {/* Phone Number */}
          <div>
            <label className="mb-1 block text-xs font-bold uppercase tracking-wider text-black/70">
              Phone / WhatsApp Number
            </label>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="+94 77 123 4567"
              className="w-full rounded-xl border border-black/15 bg-white px-3 py-2 text-sm outline-none transition focus:border-[#C44A3A] focus:ring-1 focus:ring-[#C44A3A]"
            />
          </div>

          {/* Delivery Note */}
          <div>
            <label className="mb-1 block text-xs font-bold uppercase tracking-wider text-black/70">
              Special Instructions / Delivery Location
            </label>
            <textarea
              rows={2}
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="e.g. Colombo delivery / Wholesale quote for 50kg..."
              className="w-full resize-none rounded-xl border border-black/15 bg-white px-3 py-2 text-sm outline-none transition focus:border-[#C44A3A] focus:ring-1 focus:ring-[#C44A3A]"
            />
          </div>

          {/* Order Summary & Submit Button */}
          <div className="mt-2 rounded-2xl bg-emerald-500/10 p-4 border border-emerald-500/20">
            <div className="flex items-center justify-between text-xs font-semibold text-emerald-900">
              <span>Direct WhatsApp Instant Support</span>
              <span>⚡ Fast Response</span>
            </div>
          </div>

          <button
            type="submit"
            className="flex w-full cursor-pointer items-center justify-center gap-3 rounded-full bg-[#25D366] py-3.5 text-sm font-bold uppercase tracking-wider text-white shadow-lg transition hover:bg-[#1EBE5D] hover:shadow-xl"
          >
            <span>💬 Send Order via WhatsApp</span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default OrderModal;
