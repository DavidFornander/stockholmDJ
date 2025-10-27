"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";

interface Booking {
  id: string;
  eventName: string;
  client: string;
  dj: string;
  date: string;
  time: string;
  location: string;
  status: "confirmed" | "pending" | "completed" | "cancelled";
  price: number;
  equipment: string[];
  notes?: string;
  contactEmail: string;
  contactPhone: string;
}

const BookingManagement = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [selectedBooking, setSelectedBooking] = useState<Booking | null>(null);
  const [showModal, setShowModal] = useState(false);

  // Sample booking data
  const [bookings, setBookings] = useState<Booking[]>([
    {
      id: "BK001",
      eventName: "Corporate Summer Party",
      client: "TechCorp AB",
      dj: "DJ Magnus",
      date: "2025-07-15",
      time: "18:00 - 01:00",
      location: "Grand Hotel Stockholm",
      status: "confirmed",
      price: 15000,
      equipment: ["DJ Table", "Sound System", "Uplighting", "Microphone"],
      notes: "Client prefers house and electronic music. VIP area needs separate speakers.",
      contactEmail: "events@techcorp.se",
      contactPhone: "+46 8 123 456"
    },
    {
      id: "BK002",
      eventName: "Wedding Reception",
      client: "Anna & Erik Johansson",
      dj: "DJ Sarah",
      date: "2025-06-22",
      time: "19:00 - 02:00",
      location: "Villa Pauli, Djurgården",
      status: "pending",
      price: 18000,
      equipment: ["DJ Table", "Sound System", "Microphone"],
      notes: "First dance song: 'Perfect' by Ed Sheeran. Mix of pop, rock, and Swedish classics.",
      contactEmail: "anna.johansson@email.com",
      contactPhone: "+46 70 987 654"
    },
    {
      id: "BK003",
      eventName: "Club Night",
      client: "Sturecompagniet",
      dj: "DJ Alex",
      date: "2025-06-14",
      time: "22:00 - 05:00",
      location: "Sturecompagniet, Östermalm",
      status: "confirmed",
      price: 25000,
      equipment: ["DJ Table", "Sound System", "Uplighting"],
      notes: "House and techno focus. Peak time 01:00-03:00.",
      contactEmail: "booking@sturecompagniet.se",
      contactPhone: "+46 8 545 076 00"
    },
    {
      id: "BK004",
      eventName: "Birthday Party",
      client: "Marcus Lindberg",
      dj: "DJ Emma",
      date: "2025-05-28",
      time: "20:00 - 01:00",
      location: "Private Residence, Södermalm",
      status: "completed",
      price: 8000,
      equipment: ["DJ Table", "Sound System"],
      notes: "30th birthday party. Mix of 90s, 2000s, and current hits.",
      contactEmail: "marcus.lindberg@gmail.com",
      contactPhone: "+46 73 456 789"
    }
  ]);

  const tabs = [
    { id: "all", label: "Alla Bokningar", count: bookings.length },
    { id: "confirmed", label: "Bekräftade", count: bookings.filter(b => b.status === "confirmed").length },
    { id: "pending", label: "Väntande", count: bookings.filter(b => b.status === "pending").length },
    { id: "completed", label: "Slutförda", count: bookings.filter(b => b.status === "completed").length },
    { id: "cancelled", label: "Avbrutna", count: bookings.filter(b => b.status === "cancelled").length }
  ];

  const getStatusColor = (status: Booking["status"]) => {
    switch (status) {
      case "confirmed":
        return "bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400";
      case "pending":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400";
      case "completed":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400";
      case "cancelled":
        return "bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400";
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-400";
    }
  };

  const getStatusText = (status: Booking["status"]) => {
    switch (status) {
      case "confirmed": return "Bekräftad";
      case "pending": return "Väntande";
      case "completed": return "Slutförd";
      case "cancelled": return "Avbruten";
      default: return status;
    }
  };

  const filteredBookings = activeTab === "all" 
    ? bookings 
    : bookings.filter(booking => booking.status === activeTab);

  const updateBookingStatus = (bookingId: string, newStatus: Booking["status"]) => {
    setBookings(prev => 
      prev.map(booking => 
        booking.id === bookingId 
          ? { ...booking, status: newStatus }
          : booking
      )
    );
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('sv-SE', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
  };

  const openBookingDetails = (booking: Booking) => {
    setSelectedBooking(booking);
    setShowModal(true);
  };

  const BookingCard = ({ booking }: { booking: Booking }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-800 p-6 hover:shadow-lg transition-shadow cursor-pointer"
      onClick={() => openBookingDetails(booking)}
    >
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
            {booking.eventName}
          </h3>
          <p className="text-gray-600 dark:text-gray-400">{booking.client}</p>
        </div>
        <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(booking.status)}`}>
          {getStatusText(booking.status)}
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div>
          <p className="text-sm text-gray-500 dark:text-gray-400">DJ</p>
          <p className="font-medium text-gray-900 dark:text-white">{booking.dj}</p>
        </div>
        <div>
          <p className="text-sm text-gray-500 dark:text-gray-400">Datum</p>
          <p className="font-medium text-gray-900 dark:text-white">{formatDate(booking.date)}</p>
        </div>
        <div>
          <p className="text-sm text-gray-500 dark:text-gray-400">Tid</p>
          <p className="font-medium text-gray-900 dark:text-white">{booking.time}</p>
        </div>
        <div>
          <p className="text-sm text-gray-500 dark:text-gray-400">Plats</p>
          <p className="font-medium text-gray-900 dark:text-white">{booking.location}</p>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-gray-500 dark:text-gray-400">Pris</p>
          <p className="text-lg font-bold text-green-600 dark:text-green-400">
            {booking.price.toLocaleString('sv-SE')} SEK
          </p>
        </div>
        <div className="flex gap-2">
          {booking.status === "pending" && (
            <>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  updateBookingStatus(booking.id, "confirmed");
                }}
                className="px-3 py-1 bg-green-600 hover:bg-green-700 text-white text-sm rounded-md transition-colors"
              >
                Bekräfta
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  updateBookingStatus(booking.id, "cancelled");
                }}
                className="px-3 py-1 bg-red-600 hover:bg-red-700 text-white text-sm rounded-md transition-colors"
              >
                Avbryt
              </button>
            </>
          )}
          {booking.status === "confirmed" && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                updateBookingStatus(booking.id, "completed");
              }}
              className="px-3 py-1 bg-blue-600 hover:bg-blue-700 text-white text-sm rounded-md transition-colors"
            >
              Markera Slutförd
            </button>
          )}
        </div>
      </div>
    </motion.div>
  );

  const BookingModal = () => {
    if (!selectedBooking) return null;

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white dark:bg-gray-900 rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto"
        >
          <div className="p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                Booking Detaljer
              </h2>
              <button
                onClick={() => setShowModal(false)}
                className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
              >
                ✕
              </button>
            </div>

            <div className="space-y-6">
              {/* Event Info */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  Event Information
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Event Namn
                    </label>
                    <p className="text-gray-900 dark:text-white">{selectedBooking.eventName}</p>
                  </div>
                  <div>
                    {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Klient
                    </label>
                    <p className="text-gray-900 dark:text-white">{selectedBooking.client}</p>
                  </div>
                  <div>
                    {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      DJ
                    </label>
                    <p className="text-gray-900 dark:text-white">{selectedBooking.dj}</p>
                  </div>
                  <div>
                    {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Status
                    </label>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(selectedBooking.status)}`}>
                      {getStatusText(selectedBooking.status)}
                    </span>
                  </div>
                </div>
              </div>

              {/* Date & Location */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  Datum & Plats
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Datum
                    </label>
                    <p className="text-gray-900 dark:text-white">{formatDate(selectedBooking.date)}</p>
                  </div>
                  <div>
                    {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Tid
                    </label>
                    <p className="text-gray-900 dark:text-white">{selectedBooking.time}</p>
                  </div>
                  <div className="md:col-span-2">
                    {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Plats
                    </label>
                    <p className="text-gray-900 dark:text-white">{selectedBooking.location}</p>
                  </div>
                </div>
              </div>

              {/* Contact Info */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  Kontakt Information
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Email
                    </label>
                    <a href={`mailto:${selectedBooking.contactEmail}`} className="text-blue-600 dark:text-blue-400 hover:underline">
                      {selectedBooking.contactEmail}
                    </a>
                  </div>
                  <div>
                    {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Telefon
                    </label>
                    <a href={`tel:${selectedBooking.contactPhone}`} className="text-blue-600 dark:text-blue-400 hover:underline">
                      {selectedBooking.contactPhone}
                    </a>
                  </div>
                </div>
              </div>

              {/* Equipment */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  Utrustning
                </h3>
                <div className="flex flex-wrap gap-2">
                  {selectedBooking.equipment.map((item, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900/20 text-blue-800 dark:text-blue-400 rounded-full text-sm"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* Notes */}
              {selectedBooking.notes && (
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                    Anteckningar
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-gray-800 p-4 rounded-md">
                    {selectedBooking.notes}
                  </p>
                </div>
              )}

              {/* Price */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  Prisinformation
                </h3>
                <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-md">
                  <p className="text-2xl font-bold text-green-600 dark:text-green-400">
                    {selectedBooking.price.toLocaleString('sv-SE')} SEK
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Total kostnad för eventet</p>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3 mt-8">
              {selectedBooking.status === "pending" && (
                <>
                  <button
                    onClick={() => {
                      updateBookingStatus(selectedBooking.id, "confirmed");
                      setShowModal(false);
                    }}
                    className="flex-1 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md transition-colors"
                  >
                    Bekräfta Bokning
                  </button>
                  <button
                    onClick={() => {
                      updateBookingStatus(selectedBooking.id, "cancelled");
                      setShowModal(false);
                    }}
                    className="flex-1 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md transition-colors"
                  >
                    Avbryt Bokning
                  </button>
                </>
              )}
              {selectedBooking.status === "confirmed" && (
                <button
                  onClick={() => {
                    updateBookingStatus(selectedBooking.id, "completed");
                    setShowModal(false);
                  }}
                  className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors"
                >
                  Markera som Slutförd
                </button>
              )}
              <button
                onClick={() => setShowModal(false)}
                className="px-6 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-md hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
              >
                Stäng
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-black pt-20 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            Hantera Bokningar
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Övervaka och hantera alla dina DJ-bokningar på ett ställe
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-800 p-6">
            <div className="flex items-center">
              <div className="p-2 bg-blue-100 dark:bg-blue-900/20 rounded-lg">
                <span className="text-blue-600 dark:text-blue-400 text-xl">📅</span>
              </div>
              <div className="ml-4">
                <p className="text-2xl font-bold text-gray-900 dark:text-white">
                  {bookings.length}
                </p>
                <p className="text-gray-600 dark:text-gray-400 text-sm">Total Bokningar</p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-800 p-6">
            <div className="flex items-center">
              <div className="p-2 bg-green-100 dark:bg-green-900/20 rounded-lg">
                <span className="text-green-600 dark:text-green-400 text-xl">✅</span>
              </div>
              <div className="ml-4">
                <p className="text-2xl font-bold text-gray-900 dark:text-white">
                  {bookings.filter(b => b.status === "confirmed").length}
                </p>
                <p className="text-gray-600 dark:text-gray-400 text-sm">Bekräftade</p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-800 p-6">
            <div className="flex items-center">
              <div className="p-2 bg-yellow-100 dark:bg-yellow-900/20 rounded-lg">
                <span className="text-yellow-600 dark:text-yellow-400 text-xl">⏳</span>
              </div>
              <div className="ml-4">
                <p className="text-2xl font-bold text-gray-900 dark:text-white">
                  {bookings.filter(b => b.status === "pending").length}
                </p>
                <p className="text-gray-600 dark:text-gray-400 text-sm">Väntande</p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-800 p-6">
            <div className="flex items-center">
              <div className="p-2 bg-green-100 dark:bg-green-900/20 rounded-lg">
                <span className="text-green-600 dark:text-green-400 text-xl">💰</span>
              </div>
              <div className="ml-4">
                <p className="text-2xl font-bold text-gray-900 dark:text-white">
                  {bookings.reduce((sum, b) => sum + b.price, 0).toLocaleString('sv-SE')} SEK
                </p>
                <p className="text-gray-600 dark:text-gray-400 text-sm">Total Intäkter</p>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-800 mb-6">
          <div className="flex flex-wrap border-b border-gray-200 dark:border-gray-800">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-4 text-sm font-medium transition-colors ${
                  activeTab === tab.id
                    ? "text-blue-600 dark:text-blue-400 border-b-2 border-blue-600 dark:border-blue-400"
                    : "text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"
                }`}
              >
                {tab.label} ({tab.count})
              </button>
            ))}
          </div>
        </div>

        {/* Bookings Grid */}
        <div className="grid gap-6">
          {filteredBookings.length > 0 ? (
            filteredBookings.map((booking) => (
              <BookingCard key={booking.id} booking={booking} />
            ))
          ) : (
            <div className="text-center py-12 bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-800">
              <p className="text-gray-500 dark:text-gray-400 text-lg">
                Inga bokningar hittades i denna kategori
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Modal */}
      {showModal && <BookingModal />}
    </div>
  );
};

export default BookingManagement;
