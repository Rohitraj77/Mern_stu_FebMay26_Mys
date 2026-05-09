const bookingService = require("../services/booking.service");

// Create booking 
exports.createBooking = async (req, res, next) => {
    try {
        const booking = await bookingService.createBooking(
            req.user._id,
            req.body
        );

        res.status(201).json({
            success: true,
            message: "Booking confirmed.",
            data: booking,
        });
    } catch (error) {
        next(error);
    }
};

// Get user bookings
exports.getMyBookings = async (req, res, next) => {
    try {
        const bookings = await bookingService.getUserBookings(req.user._id);

        res.status(200).json({
            success: true,
            message: "Bookings fetched successfully.",
            data: bookings,   // ✅ fixed (was booking ❌)
        });
    } catch (error) {
        next(error);
    }
};

// Cancel booking
exports.CancelBookings = async (req, res, next) => {
    try {
        const result = await bookingService.cancelBooking(
            req.params.bookingId,   // ✅ fixed (was id ❌)
            req.user._id
        );

        res.status(200).json({
            success: true,
            message: "Booking cancelled successfully.",
            data: result,   // ✅ fixed (was undefined booking ❌)
        });
    } catch (error) {
        next(error);
    }
};