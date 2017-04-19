class User < ApplicationRecord
  validates :username, :pw_digest, :session_token, presence: true
  validates :username, :session_token, uniqueness: true
  validates :password, length: { minimum: 6, allow_nil: true }

  after_initialize :ensure_token
  before_validation :ensure_token_unique

  # db associations

  attr_reader :password

  def self.find_by_creds(username, pw)
    @user = User.find_by(username: username)
    @user.valid_pass?(pw) ? @user : nil
  end

  def password=(pw)
    @password = pw
    self.pw_digest = BCrypt::Password.create(pw)
  end

  def reset_token
    self.session_token = g_token
    self.save!
    self.session_token
  end

  def valid_pass?(pw)
    BCrypt::Password.new(self.pw_digest).is_password?(pw)
  end

  private

  def g_token
    SecureRandom.urlsafe_base64(16)
  end

  def ensure_token_unique
    while User.find_by(session_token: self.session_token)
      self.session_token = g_token
    end
  end

  def ensure_token
    self.session_token ||= g_token
  end
end