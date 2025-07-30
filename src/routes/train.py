from flask import Blueprint, request, jsonify
import requests
import os

train_bp = Blueprint('train', __name__)

# RapidAPI configuration
RAPIDAPI_KEY = os.environ.get('RAPIDAPI_KEY', 'your-rapidapi-key-here')
RAPIDAPI_HOST = 'indian-railway-irctc.p.rapidapi.com'

def get_rapidapi_headers():
    return {
        'x-rapidapi-key': RAPIDAPI_KEY,
        'x-rapidapi-host': RAPIDAPI_HOST,
        'x-rapid-api': 'rapid-api-database'
    }

@train_bp.route('/train-search/<train_number>', methods=['GET'])
def search_train(train_number):
    """Search for train information by train number"""
    try:
        url = f"https://{RAPIDAPI_HOST}/api/trains-search/v1/train/{train_number}"
        params = {
            'isH5': 'true',
            'client': 'web'
        }
        
        response = requests.get(url, headers=get_rapidapi_headers(), params=params)
        
        if response.status_code == 200:
            return jsonify({
                'success': True,
                'data': response.json()
            })
        else:
            return jsonify({
                'success': False,
                'error': 'Failed to fetch train information'
            }), 400
            
    except Exception as e:
        return jsonify({
            'success': False,
            'error': str(e)
        }), 500

@train_bp.route('/train-status', methods=['GET'])
def get_train_status():
    """Get live train status"""
    try:
        train_number = request.args.get('train_number')
        departure_date = request.args.get('departure_date')
        
        if not train_number or not departure_date:
            return jsonify({
                'success': False,
                'error': 'train_number and departure_date are required'
            }), 400
        
        url = f"https://{RAPIDAPI_HOST}/api/trains/v1/train/status"
        params = {
            'departure_date': departure_date,
            'isH5': 'true',
            'client': 'web',
            'train_number': train_number
        }
        
        response = requests.get(url, headers=get_rapidapi_headers(), params=params)
        
        if response.status_code == 200:
            return jsonify({
                'success': True,
                'data': response.json()
            })
        else:
            return jsonify({
                'success': False,
                'error': 'Failed to fetch train status'
            }), 400
            
    except Exception as e:
        return jsonify({
            'success': False,
            'error': str(e)
        }), 500

@train_bp.route('/pnr-status/<pnr_number>', methods=['GET'])
def check_pnr_status(pnr_number):
    """Check PNR status (placeholder - would need different API)"""
    try:
        # Note: This is a placeholder as the current API doesn't have PNR endpoint
        # In a real implementation, you would use a different API or service
        return jsonify({
            'success': True,
            'message': 'PNR status check feature coming soon',
            'pnr': pnr_number
        })
        
    except Exception as e:
        return jsonify({
            'success': False,
            'error': str(e)
        }), 500

@train_bp.route('/seat-availability', methods=['GET'])
def check_seat_availability():
    """Check seat availability (placeholder - would need different API)"""
    try:
        train_number = request.args.get('train_number')
        from_station = request.args.get('from_station')
        to_station = request.args.get('to_station')
        date = request.args.get('date')
        class_code = request.args.get('class_code', 'SL')
        
        if not all([train_number, from_station, to_station, date]):
            return jsonify({
                'success': False,
                'error': 'train_number, from_station, to_station, and date are required'
            }), 400
        
        # Note: This is a placeholder as the current API doesn't have seat availability endpoint
        # In a real implementation, you would use a different API or service
        return jsonify({
            'success': True,
            'message': 'Seat availability check feature coming soon',
            'query': {
                'train_number': train_number,
                'from_station': from_station,
                'to_station': to_station,
                'date': date,
                'class_code': class_code
            }
        })
        
    except Exception as e:
        return jsonify({
            'success': False,
            'error': str(e)
        }), 500

@train_bp.route('/stations', methods=['GET'])
def get_stations():
    """Get list of railway stations (placeholder)"""
    try:
        # This would typically come from a database or API
        sample_stations = [
            {'code': 'NDLS', 'name': 'New Delhi'},
            {'code': 'BCT', 'name': 'Mumbai Central'},
            {'code': 'HWH', 'name': 'Howrah Junction'},
            {'code': 'MAS', 'name': 'Chennai Central'},
            {'code': 'SBC', 'name': 'Bangalore City'},
            {'code': 'PUNE', 'name': 'Pune Junction'},
            {'code': 'JP', 'name': 'Jaipur Junction'},
            {'code': 'ADI', 'name': 'Ahmedabad Junction'}
        ]
        
        return jsonify({
            'success': True,
            'data': sample_stations
        })
        
    except Exception as e:
        return jsonify({
            'success': False,
            'error': str(e)
        }), 500

